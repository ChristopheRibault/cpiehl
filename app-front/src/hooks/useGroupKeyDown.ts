import { useCallback } from "react";

interface UseGroupKeyDownProps {
  isOpen: boolean;
  onToggle: () => void;
  submenuRef: React.RefObject<HTMLUListElement | null>;
}

export const useGroupKeyDown = ({
  isOpen,
  onToggle,
  submenuRef,
}: UseGroupKeyDownProps) => {
  return useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          onToggle();
          // Focus le premier lien après ouverture
          if (!isOpen) {
            setTimeout(() => {
              const firstLink = submenuRef.current?.querySelector("a");
              (firstLink as HTMLAnchorElement)?.focus();
            }, 0);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            onToggle();
            setTimeout(() => {
              const firstLink = submenuRef.current?.querySelector("a");
              (firstLink as HTMLAnchorElement)?.focus();
            }, 0);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (!isOpen) {
            onToggle();
            setTimeout(() => {
              const links = submenuRef.current?.querySelectorAll("a");
              if (links) {
                (links[links.length - 1] as HTMLAnchorElement).focus();
              }
            }, 0);
          }
          break;
      }
    },
    [isOpen, onToggle, submenuRef],
  );
};
