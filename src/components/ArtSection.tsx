import { useEffect, useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Piece = {
  src: string;
  ratio: "portrait" | "landscape";
};

const pieces: Piece[] = [
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1787210915/0801_1_jjxjc2.mp4",
    ratio: "portrait",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1787210912/magnific_make-it-move_79OoWIHJAL_liwxde.mp4",
    ratio: "landscape",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1787210911/magnific_drinking-tea-at-look-at-t_MBpLQ2zDCm_t7xt4m.mp4",
    ratio: "landscape",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1787210912/magnific_scene-context-a-tiny-smil_WD0kESecXe_zx40nt.mp4",
    ratio: "landscape",
  },
  {
    src: "https://res.cloudinary.com/dwxo1pbn/video/upload/v1787210912/magnific_scene-context-from-a-shop_MBpLHFHDCm_upsrlu.mp4",
    ratio: "landscape",
  },
];

/**
 * 화면에 들어올 때만 영상을 로드하고 재생 — 용량 큰 파일 대응.
 * IntersectionObserver 대신 위치를 직접 재는 이유: 탭이 백그라운드이거나
 * 렌더링이 멈춘 환경에서는 옵저버가 발화하지 않아 영상이 영영 안 뜰 수 있음.
 */
function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const r = el.getBoundingClientRect();
      const margin = 300; // 화면에 닿기 조금 전에 미리 준비
      const near = r.bottom > -margin && r.top < window.innerHeight + margin;

      if (near) {
        if (!loadedRef.current) {
          el.src = src;
          el.load();
          loadedRef.current = true;
        }
        if (el.paused) el.play().catch(() => {});
      } else if (!el.paused) {
        el.pause();
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}

export default function ArtSection() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();
  const portrait = pieces.find((p) => p.ratio === "portrait")!;
  const landscape = pieces.filter((p) => p.ratio === "landscape");

  return (
    <section
      id="art"
      ref={ref}
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 flex flex-col items-center"
    >
      <div
        className={`max-w-6xl w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-center text-white/40 text-sm tracking-[0.25em] mb-5">
          EXPERIMENT
        </p>
        <h2 className="font-display leading-[1.1] text-white text-center text-4xl md:text-6xl">
          어디까지 <span className="text-[#FFD600]">되는지</span>
        </h2>

        <p className="mt-7 text-center text-white/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          의뢰받은 작업은 아닙니다.
          <br className="hidden md:block" />
          연출을 어디까지 밀 수 있는지 확인하려고 만들었습니다.
        </p>

        {/* 세로 1개 + 가로 4개 비대칭 그리드 */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {/* 세로 — 데스크톱에서 2행 차지 */}
          <div className="md:row-span-2 rounded-2xl overflow-hidden aspect-[9/16] bg-black border border-white/10">
            <LazyVideo
              src={portrait.src}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 가로 4개 */}
          {landscape.map((p) => (
            <div
              key={p.src}
              className="rounded-2xl overflow-hidden aspect-video bg-black border border-white/10"
            >
              <LazyVideo src={p.src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
