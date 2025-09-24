import { useEffect } from "react";
import { usePostStore } from "../stores/postStore";
import PostListItem from "./PostListItem";
import PostListLoader from "./PostListLoader";
export default function PostList() {
  const posts = usePostStore((state) => state.posts);
  const isLoadingPosts = usePostStore((state) => state.isLoadingPosts);
  const fetchPosts = usePostStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoadingPosts) {
    return <PostListLoader />;
  }
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[35px] mt-[80px] mb-[152px]">
        {posts?.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
