"use client";

import { useRef } from "react";
import { z } from "zod";
import { navigationLinkSchema } from "@/sanity/schemas/navigationLink";
import { NavLink } from "./NavLink";
import { ChevronIcon } from "@/app/_components/Icons/ChevronIcon";
import { useArrowNavigation } from "@/hooks/useArrowNavigation";
import { useGroupKeyDown } from "@/hooks/useGroupKeyDown";

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

  // Gestion de la navigation au clavier
  const handleKeyDown = useGroupKeyDown({ isOpen, onToggle, submenuRef });
  useArrowNavigation(submenuRef, "a", isOpen);
  return (
    <div className="relative group">
      {/* Bouton du groupe */}
      <button
        ref={buttonRef}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="
          flex items-center gap-2 py-2 px-4
          text-secondary hover:text-primary
          cursor-pointer
          transition-colors duration-200
          font-bold
          w-full md:w-auto
        "
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
              className="hover:bg-primary text-secondary hover:text-white ml-4 md:ml-0"
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
