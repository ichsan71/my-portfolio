import { ref, onMounted, onUnmounted, type Ref } from "vue";

/**
 * Lightweight scroll-reveal composable using IntersectionObserver.
 * Tracks which elements (by data-reveal-id) have entered the viewport.
 */
export function useScrollReveal(
  containerRef: Ref<HTMLElement | null>,
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const revealed = ref<Set<string>>(new Set());
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            if (id) revealed.value.add(id);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      },
    );

    if (containerRef.value) {
      containerRef.value
        .querySelectorAll("[data-reveal-id]")
        .forEach((el) => observer?.observe(el));
    }
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  const isRevealed = (id: string) => revealed.value.has(id);

  return { revealed, isRevealed };
}
