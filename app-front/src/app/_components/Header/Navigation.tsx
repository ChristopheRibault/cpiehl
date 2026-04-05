"use client";

import { useState, useRef } from "react";
import { navigationLinkSchema } from "@/sanity/schemas/navigationLink";
import { navigationGroupSchema } from "@/sanity/schemas/navigationGroup";
import { z } from "zod";
import { NavLink } from "./NavLink";
import { NavGroup } from "./NavGroup";
import { BurgerButton } from "./BurgerButton";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useEscapeKey } from "@/hooks/useEscapeKey";

type NavigationItem =
  | z.infer<typeof navigationLinkSchema>
  | z.infer<typeof navigationGroupSchema>;

interface Props {
  items?: NavigationItem[];
}

export const Navigation = ({ items = [] }: Props) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);
  const closeBurger = () => setIsBurgerOpen(false);
  const closeAll = () => {
    setIsBurgerOpen(false);
    setOpenSubmenuId(null);
  };
  const toggleSubmenu = (id: string) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  // Utiliser les hooks custom
  useEscapeKey(closeAll);
  useClickOutside(navRef, closeAll, isBurgerOpen || !!openSubmenuId);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="flex flex-row-reverse items-start gap-4 p-2 md:p-4 w-full"
    >
      {/* Burger Button - visible en mobile, positionné à droite */}
      <div className="md:hidden mr-auto">
        <BurgerButton isOpen={isBurgerOpen} onClick={toggleBurger} />
      </div>

      {/* Navigation principale */}
      <div
        className={`
          flex-1
          transition-all duration-300 ease-in-out
          ${isBurgerOpen ? "block" : "hidden md:flex"}
          z-40
        `}
      >
        <ul className="flex flex-col md:flex-row md:gap-6 md:items-center md:justify-center w-full">
          <NavLink
            label="Accueil"
            href="/"
            className="text-secondary hover:text-primary"
            onClick={closeBurger}
          />
          {items.map((item, index) => {
            const itemId = `nav-item-${index}`;
            const isSubmenuOpen = openSubmenuId === itemId;

            if (item._type === "navigationLink") {
              return (
                <li key={itemId}>
                  <NavLink
                    className="text-secondary hover:text-primary"
                    label={item.label}
                    href={`/${item.page.slug.current}`}
                    onClick={closeBurger}
                  />
                </li>
              );
            }

            if (item._type === "navigationGroup") {
              return (
                <li key={itemId}>
                  <NavGroup
                    label={item.label}
                    submenuItems={item.children}
                    isOpen={isSubmenuOpen}
                    onToggle={() => toggleSubmenu(itemId)}
                    onLinkClick={closeBurger}
                  />
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};
