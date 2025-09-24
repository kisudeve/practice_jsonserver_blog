import { format } from "date-fns";
import { Link } from "react-router";

export default function PostListItem({
  post: {
    id,
    category,
    title,
    createdAt,
    content,
    thumbnail,
    writer,
    writerAvatar,
  },
}: {
  post: Post;
}) {
  return (
    <>
      <Link to={`/read/${id}`}>
        <article>
          <img
            src={thumbnail}
            alt="dummy"
            className="object-cover w-full aspect-[16/9]"
          />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
              {title}
            </h3>
            <p className="text-[#515151]">
              {format(createdAt, "yyyy-MM-dd")} • 11 min read
            </p>
            <p className="mt-[15px] text-[#434343]">{content}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img
                src={writerAvatar}
                alt=""
                className="rounded-s-full max-w-10"
              />
              <strong className="text-sm">{writer}</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
