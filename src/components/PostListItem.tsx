import { Link } from "react-router";
import { dummyImage, dummyImage3 } from "../assets/blog/assets";

export default function PostListItem() {
  return (
    <>
      <Link to="/read/1">
        <article>
          <img src={dummyImage} alt="dummy" className="object-cover" />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              Next.JS
            </strong>
            <h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h3>
            <p className="text-[#515151]">Sep 21, 2025 • 11 min read</p>
            <p className="mt-[15px] text-[#434343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras.
            </p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img src={dummyImage3} alt="" className="rounded-s-full" />
              <strong className="text-sm">George Costanazv</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
