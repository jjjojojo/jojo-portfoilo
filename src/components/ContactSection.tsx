import { useFadeIn } from "@/hooks/useFadeIn";

export default function ContactSection() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 flex flex-col items-center"
    >
      <div
        className={`max-w-3xl w-full text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white/40 text-sm tracking-[0.25em] mb-5">CONTACT</p>

        <h2 className="font-display leading-[1.1] text-white text-4xl md:text-6xl">
          팔고 싶은 제품이 있으신가요
        </h2>

        <p className="mt-7 text-white/55 text-base md:text-lg leading-relaxed">
          제품 정보만 주시면 어떤 소구점으로,
          <br className="hidden md:block" />
          어떤 화자로 만들지 먼저 정리해서 보내드립니다.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:c264655@naver.com"
            className="bg-[#FFD600] text-[#0A0A0A] font-display text-lg px-10 py-4 rounded-full hover:bg-white transition-colors duration-300"
          >
            이메일로 문의하기
          </a>
          <a
            href="#work"
            className="border-2 border-white/50 text-white font-display text-lg px-10 py-4 rounded-full hover:bg-white hover:text-[#0A0A0A] hover:border-white transition-colors duration-300"
          >
            작업물 다시 보기
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-white text-lg">김민성</p>
          <p className="text-white/35 text-sm">
            AI UGC 영상 제작 · 퍼포먼스 광고 소재
          </p>
        </div>
      </div>
    </section>
  );
}
