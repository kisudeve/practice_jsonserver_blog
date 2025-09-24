import PostListItem from "./PostListItem";
export default function PostList() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[35px] mt-[80px] mb-[152px]">
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </section>
    </>
  );
}
