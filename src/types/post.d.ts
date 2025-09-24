type Post = {
  id?: string;
  title: string;
  category: string;
  thumbnail: string;
  writer: string;
  writerAvatar: string;
  content: string;
  createdAt: Date;
  updatedAt?: string; // 나중에 확장을 위한 고려
};
