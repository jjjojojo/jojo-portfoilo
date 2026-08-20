import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

// TODO: title / note 를 실제 영상 내용에 맞게 채울 것
const videos = [
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723439/0802_ygotdb.mp4",
    title: "",
    note: "",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723438/0802_1_ouecjj.mp4",
    title: "",
    note: "",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723436/magnific_dtB9Qs4XSL_kdcfsu.mp4",
    title: "",
    note: "",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723436/magnific_lJSmfHzgv9_rjkqh6.mp4",
    title: "",
    note: "",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723529/magnific_a-ugc-selfie-review-of-le_Cqu24DQEEy_kqschb.mp4",
    title: "",
    note: "",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1785723435/magnific_Sywvxx6Ub8_wuw8h6.mp4",
    title: "",
    note: "",
  },
];

export default function WorkSection() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, videos.length - perView);
  const go = (dir: number) =>
    setIndex((prev) => Math.min(maxIndex, Math.max(0, prev + dir)));

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 50) go(delta > 0 ? -1 : 1);
    startX.current = null;
  };

  return (
    <section
      id="work"
      ref={ref}
      className="bg-[#F5F2EC] py-24 md:py-32 px-6 flex flex-col items-center"
    >
      <div
        className={`max-w-6xl w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-center text-[#0A0A0A]/50 text-sm tracking-[0.25em] mb-5">
          WORK
        </p>
        <h2 className="font-display leading-[1.1] text-[#0A0A0A] text-center text-4xl md:text-6xl">
          <span className="relative inline-block">
            <span className="relative z-10">지금까지 만든 것들</span>
            <span className="absolute left-0 bottom-1 w-full h-4 md:h-5 bg-[#FFD600] -z-0" />
          </span>
        </h2>

        <p className="mt-7 text-center text-[#0A0A0A]/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          전부 촬영 없이 만들었습니다.
          <br className="hidden md:block" />
          기획부터 편집까지 혼자 했습니다.
        </p>

        <div
          className="mt-14 relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {videos.map((video) => (
              <div
                key={video.title}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / perView}% - ${((perView - 1) * 16) / perView}px)` }}
              >
                <div className="rounded-2xl overflow-hidden aspect-[9/16] bg-[#0A0A0A] border-2 border-[#0A0A0A]">
                  <video
                    className="w-full h-full object-cover"
                    src={video.src}
                    title={video.title}
                    controls
                    playsInline
                    loop
                    muted
                    preload="metadata"
                  />
                </div>
                {video.title && (
                  <p className="mt-4 font-display text-lg text-[#0A0A0A]">
                    {video.title}
                  </p>
                )}
                {video.note && (
                  <p className="mt-1 text-sm text-[#0A0A0A]/55 leading-relaxed">
                    {video.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="이전"
            className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center transition-colors hover:bg-[#0A0A0A] hover:text-[#F5F2EC] disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-[#0A0A0A]"
          >
            <ChevronLeft size={22} />
          </button>
          <span className="font-num text-sm text-[#0A0A0A]/50 tabular-nums">
            {index + 1} / {maxIndex + 1}
          </span>
          <button
            onClick={() => go(1)}
            disabled={index === maxIndex}
            aria-label="다음"
            className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center transition-colors hover:bg-[#0A0A0A] hover:text-[#F5F2EC] disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-[#0A0A0A]"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
