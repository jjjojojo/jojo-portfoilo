import WorkSection from "@/components/WorkSection";
import ArtSection from "@/components/ArtSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0A0A0A]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/60" />

      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 md:pb-20 px-6 md:px-12">
        <span className="absolute top-8 left-6 md:left-12 font-display text-[#FFD600] text-xs md:text-sm tracking-[0.2em] border border-[#FFD600]/60 px-3 py-1.5">
          AI UGC 영상 제작
        </span>

        <h1
          className="font-display leading-[1.05] text-white"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6.5rem)" }}
        >
          <span className="block">촬영 없이</span>
          <span className="block">
            광고 영상 <span className="text-[#FFD600]">만듭니다</span>
          </span>
        </h1>

        <p className="mt-8 text-white/70 text-lg md:text-2xl leading-relaxed max-w-2xl">
          모델도 스튜디오도 없이 만듭니다.
          <br className="hidden md:block" />
          제품 정보만 주시면 됩니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("work")}
            className="bg-[#FFD600] text-[#0A0A0A] font-display text-lg tracking-wide px-9 py-4 rounded-full hover:bg-white transition-colors duration-300"
          >
            작업물 보기 →
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-transparent text-white border-2 border-white/60 font-display text-lg tracking-wide px-9 py-4 rounded-full hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
          >
            문의하기 →
          </button>
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const words = [
    "숏폼 광고 소재",
    "AI UGC",
    "셀피 리뷰",
    "제품 데모",
    "후킹 설계",
    "A/B 테스트",
  ];
  const line = [...words, ...words];

  return (
    <div className="bg-[#FFD600] py-4 overflow-hidden border-y-2 border-[#0A0A0A]">
      <div className="marquee-track">
        {line.map((w, i) => (
          <span
            key={i}
            className="font-display text-[#0A0A0A] text-xl md:text-2xl px-8 whitespace-nowrap"
          >
            {w} <span className="text-[#0A0A0A]/35">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grain">
      <Hero />
      <Marquee />
      <WorkSection />
      <ArtSection />
      <WhySection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}

export default App;
