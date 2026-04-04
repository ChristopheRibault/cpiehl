import { useEffect } from "react";

export const useArrowNavigation = (
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string = "a",
  isActive: boolean = true,
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(
        container.querySelectorAll(selector),
      ) as HTMLElement[];
      const activeElement = document.activeElement;

      if (!items.includes(activeElement as HTMLElement)) return;

      e.preventDefault();
      const currentIndex = items.indexOf(activeElement as HTMLElement);
      let nextIndex: number;

      if (e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % items.length;
      } else {
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      }

      (items[nextIndex] as HTMLElement).focus();
    };

    const container = containerRef.current;
    container?.addEventListener("keydown", handleKeyDown);
    return () => container?.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, selector, isActive]);
};
