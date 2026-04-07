"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
  isFirstLevel?: boolean;
  onClick?: () => void;
}

export const NavLink = ({
  label,
  href,
  isFirstLevel = false,
  onClick,
}: Props) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center md:justify-center py-2 ${isFirstLevel ? "px-4 md:px-8" : "px-2"}
        ${isFirstLevel ? "md:border-l md:border-secondary/30" : ""}
        transition-colors duration-200
        font-bold
        w-full md:w-auto md:min-w-32
        hover:bg-secondary/70 hover:text-white ${isFirstLevel ? "ml-0" : "ml-4"} md:ml-0
        ${isActive ? "bg-primary text-white" : "text-secondary"}
      `}
    >
      {label}
    </Link>
  );
};
