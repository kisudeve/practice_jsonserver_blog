import { dummyImage, dummyImage3 } from "../assets/blog/assets";

export default function PostRead() {
  return (
    <>
      {/* 이미지 */}
      <section className="max-w-[800px] mx-auto">
        <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
          Next.JS
        </strong>
        <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold">
          What Traveling Greece For 2 Weeks Taught Me About Life
        </h3>
        <p className="text-sm text-[#515151] mb-[18px]">
          Sep 1, 2025 • 7 min read
        </p>
        <img
          src={dummyImage}
          alt="dummy"
          className="object-cover w-full max-h-[278px] rounded-md"
        />
        <div className="mt-4 flex items-center gap-[14px]">
          <img src={dummyImage3} alt="" className="rounded-s-full max-w-10" />
          <strong className="text-sm">George Costanazv</strong>
        </div>
      </section>
      {/* 본문 */}
      <section className="max-w-[800px] mx-auto text-lg sm:text-xl text-[#434343] mt-5 [&>p]:mb-10 mb-10 ">
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <p>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
      </section>
    </>
  );
}
