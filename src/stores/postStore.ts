import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { axiosInstance } from "../api/axiosInstance";

type PostStore = {
  posts: Post[];
  isLoadingPosts: boolean;
  error: string | null;
  post: Post | null; // 단일 게시글(상세)
  isLoadingPost: boolean; // 단일 게시글(상세)
  errorPost: string | null; // 단일 게시글(상세)
  fetchPosts: (url?: string) => Promise<void>;
  fetchPost: (url?: string) => Promise<void>;
  addPost: (formData: Post) => Promise<Post | null>;
};

export const usePostStore = create<PostStore>()(
  immer((set) => ({
    posts: [],
    isLoadingPosts: true,
    error: null,
    post: null,
    isLoadingPost: true,
    errorPost: null,
    fetchPosts: async (url?: string) => {
      set((state) => {
        state.isLoadingPosts = true;
        state.error = null;
      });
      try {
        const { data } = await axiosInstance.get(url || "posts");
        set((state) => {
          state.posts = data;
          state.isLoadingPosts = false;
        });
      } catch (err: unknown) {
        console.error("❌ fetchPosts error:", err);
        set((state) => {
          state.error = "게시글 불러오기 실패";
          state.isLoadingPosts = false;
        });
      }
    },
    fetchPost: async (url?: string) => {
      set((state) => {
        state.isLoadingPost = true;
        state.errorPost = null;
      });
      try {
        const { data } = await axiosInstance.get(url || "posts");
        console.log(data);
        set((state) => {
          state.post = data;
          state.isLoadingPost = false;
        });
      } catch (err: unknown) {
        console.error("❌ fetchPosts error:", err);
        set((state) => {
          state.error = "게시글 불러오기 실패";
          state.isLoadingPost = false;
        });
      }
    },
    addPost: async (formData: Post) => {
      try {
        const { data } = await axiosInstance.post("posts", formData);
        return data;
      } catch (err: unknown) {
        console.error("❌ addPost error:", err);
        set((state) => {
          state.error = "게시글 등록 실패";
        });
        return null;
      }
    },
  }))
);
