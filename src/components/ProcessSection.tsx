import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
  {
    no: "01",
    title: "세일즈 포인트를 잡습니다",
    body: "스펙을 읊는 영상은 아무도 보지 않습니다. 이 제품이 어떤 불편을 없애주는지, 그게 누구 얘기인지부터 정합니다. 여기가 흐리면 뒤를 아무리 잘 만들어도 안 먹힙니다.",
  },
  {
    no: "02",
    title: "포인트에 맞는 모델을 생성합니다",
    body: "같은 말도 누가 하느냐에 따라 다르게 들립니다. 세일즈 포인트와 타겟에 맞는 인물을 생성하고, 그 사람이 실제로 쓸 법한 문장으로 대본을 씁니다.",
  },
  {
    no: "03",
    title: "첫 후킹을 잡습니다",
    body: "숏폼은 3초 안에 넘어갑니다. 문제 상황으로 열지, 결과부터 보여줄지, 질문을 던질지 정하고 나머지를 거기에 맞춥니다.",
  },
  {
    no: "04",
    title: "A/B 테스트로 남길 것을 고릅니다",
    body: "후킹, 타겟, CTA를 바꾼 버전을 여러 개 만들어 동시에 돌립니다. 하나만 걸면 잘돼도 왜 잘됐는지 모릅니다. 숫자로 확인된 소재만 남겨서 확장합니다.",
  },
];

export default function ProcessSection() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="process"
      ref={ref}
      className="bg-[#0A0A0A] py-24 md:py-32 px-6 flex flex-col items-center"
    >
      <div
        className={`max-w-5xl w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-center text-white/40 text-sm tracking-[0.25em] mb-5">
          PROCESS
        </p>
        <h2 className="font-display leading-[1.1] text-white text-center text-4xl md:text-6xl">
          예쁜 영상이 아니라
          <br />
          <span className="text-[#FFD600]">팔리는 영상</span>을 만듭니다
        </h2>

        <p className="mt-7 text-center text-white/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          영상은 콘텐츠가 아니라 광고 소재입니다.
          <br className="hidden md:block" />
          그래서 만들기 전에 정하는 것이 더 많습니다.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.no}
              className="border-2 border-white/15 rounded-2xl p-7 hover:border-[#FFD600] transition-colors duration-300"
            >
              <span className="font-num text-[#FFD600] text-3xl">{s.no}</span>
              <h3 className="mt-3 font-display text-xl md:text-2xl text-white leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-white/55 text-sm md:text-base leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
