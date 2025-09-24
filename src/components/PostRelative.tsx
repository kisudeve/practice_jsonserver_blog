import { dummyImage } from "../assets/blog/assets";

export default function PostRelative() {
  return (
    <>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[26px] sm:text-[34px] md:text-[30px] font-bold mb-[20px]">
          Recommand Reading
        </h3>
        <ul className="[&>li]:mb-[30px]">
          <li>
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md sm:max-w-[250px]"
              />
              <div>
                <h4 className="text-lg sm:text-[22px] font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-base sm:text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md sm:max-w-[250px]"
              />
              <div>
                <h4 className="text-lg sm:text-[22px] font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-base sm:text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
              <img
                src={dummyImage}
                alt=""
                className="rounded-md sm:max-w-[250px]"
              />
              <div>
                <h4 className="text-lg sm:text-[22px] font-bold mb-2">
                  Why you don’t need more than 3 pieces of clothing
                </h4>
                <p className="text-base sm:text-lg text-[#4b4b4b] line-clamp-3">
                  Et vitae, mollis euismod lobortis blandit amet sed amet. Amet
                  ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.Et vitae, mollis euismod lobortis blandit amet sed amet.
                  Amet ut amet nisl tortor arcu non id nulla mauris neque nisl
                  magna.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
