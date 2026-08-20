import { useFadeIn } from "@/hooks/useFadeIn";

const rows = [
  {
    label: "기존 UGC",
    items: [
      "크리에이터 섭외에 며칠",
      "일정 맞추고 촬영까지 또 며칠",
      "한 편에 수십만 원",
      "다시 찍으려면 처음부터",
      "결국 한 버전만 집행",
    ],
    tone: "dim",
  },
  {
    label: "AI UGC",
    items: [
      "섭외·촬영 없음",
      "한 번에 여러 버전 제작",
      "한 편 단가가 훨씬 낮음",
      "고칠 데가 있으면 다시 생성",
      "반응 좋은 소재만 남겨 확장",
    ],
    tone: "bright",
  },
];

export default function WhySection() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="bg-[#F5F2EC] py-24 md:py-32 px-6 flex flex-col items-center"
    >
      <div
        className={`max-w-5xl w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-center text-[#0A0A0A]/50 text-sm tracking-[0.25em] mb-5">
          WHY
        </p>
        <h2 className="font-display leading-[1.1] text-[#0A0A0A] text-center text-4xl md:text-6xl">
          <span className="relative inline-block">
            <span className="relative z-10">A/B 테스트</span>
            <span className="absolute left-0 bottom-1 w-full h-4 md:h-5 bg-[#FFD600] -z-0" />
          </span>
          를
          <br />
          전제로 만듭니다
        </h2>

        <p className="mt-7 text-center text-[#0A0A0A]/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          단가가 싸다는 건 부수적입니다.
          같은 제품으로 후킹과 타겟, CTA를 바꾼 버전을 한 번에 뽑을 수 있다는 게 핵심입니다.
          소재가 하나뿐이면 성과가 나빠도 뭘 고쳐야 할지 알 수 없습니다.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {rows.map((r) => (
            <div
              key={r.label}
              className={`rounded-2xl p-8 border-2 ${
                r.tone === "bright"
                  ? "bg-[#0A0A0A] border-[#0A0A0A]"
                  : "bg-transparent border-[#0A0A0A]/15"
              }`}
            >
              <span
                className={`inline-block font-display text-sm px-4 py-1.5 rounded-full ${
                  r.tone === "bright"
                    ? "bg-[#FFD600] text-[#0A0A0A]"
                    : "bg-[#0A0A0A]/8 text-[#0A0A0A]/50"
                }`}
              >
                {r.label}
              </span>
              <ul className="mt-6 space-y-3.5">
                {r.items.map((it) => (
                  <li
                    key={it}
                    className={`flex gap-3 text-base leading-relaxed ${
                      r.tone === "bright" ? "text-white" : "text-[#0A0A0A]/45"
                    }`}
                  >
                    <span
                      className={
                        r.tone === "bright"
                          ? "text-[#FFD600]"
                          : "text-[#0A0A0A]/25"
                      }
                    >
                      {r.tone === "bright" ? "→" : "×"}
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
