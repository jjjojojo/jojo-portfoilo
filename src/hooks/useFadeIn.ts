import { useEffect, useRef, useState } from "react";

/**
 * 스크롤로 들어올 때 페이드인.
 *
 * IntersectionObserver 대신 위치를 직접 재는 이유:
 * 렌더링이 멈춘 탭이나 일부 임베드 환경에서는 옵저버가 아예 발화하지 않아
 * 콘텐츠가 영영 opacity-0으로 남는다. 스크롤 이벤트는 그런 환경에서도
 * 동작하므로 콘텐츠가 안 보이는 최악의 경우를 막을 수 있다.
 */
export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;

    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      // 요소가 화면에 조금이라도 걸치면 표시
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        done = true;
        setVisible(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return { ref, visible };
}
