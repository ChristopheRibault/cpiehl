"use client";

import { useRef } from "react";
import { z } from "zod";
import { navigationLinkSchema } from "@/sanity/schemas/navigationLink";
import { NavLink } from "./NavLink";
import { ChevronIcon } from "@/app/_components/Icons/ChevronIcon";
import { useArrowNavigation } from "@/hooks/useArrowNavigation";
import { useGroupKeyDown } from "@/hooks/useGroupKeyDown";
import { usePathname } from "next/navigation";

type SubmenuItem = z.infer<typeof navigationLinkSchema>;

interface Props {
  label: string;
  submenuItems: SubmenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick?: () => void;
}

export const NavGroup = ({
  label,
  submenuItems,
  isOpen,
  onToggle,
  onLinkClick,
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  const hasActiveChild = submenuItems.some((item) => {
    const href = `/${item.page.slug.current}`;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  });

  // Gestion de la navigation au clavier
  const handleKeyDown = useGroupKeyDown({ isOpen, onToggle, submenuRef });
  useArrowNavigation(submenuRef, "a", isOpen);
  return (
    <div className="relative group min-w-32">
      {/* Bouton du groupe */}
      <button
        ref={buttonRef}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`
          flex items-center gap-2 py-2 px-4 md:px-8
          md:border-l md:border-secondary/30
          hover:text-white
          hover:bg-secondary/70
          cursor-pointer
          transition-colors duration-200
          font-bold
          w-full md:w-auto md:min-w-32
          ${hasActiveChild ? "md:bg-primary text-secondary md:text-white" : "text-secondary"}
        `}
      >
        <span>{label}</span>
        <ChevronIcon
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Liste des sous-items */}
      <ul
        ref={submenuRef}
        className={`
          md:absolute md:top-full md:left-0 md:mt-0
          md:bg-white md:shadow-lg md:rounded-md
          md:w-full md:z-50
          flex flex-col
          md:group-hover:block
          transition-all duration-300 ease-in-out
          ${isOpen ? "block md:block" : "hidden md:hidden"}
        `}
      >
        {submenuItems.map((item) => (
          <li key={`${item.label}-${item.page.slug.current}`}>
            <NavLink
              label={item.label}
              href={`/${item.page.slug.current}`}
              onClick={onLinkClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
