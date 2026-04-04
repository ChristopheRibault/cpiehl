"use client";

import Link from "next/link";

interface Props {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ label, href, className = "", onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center py-2 px-4
        transition-colors duration-200
        font-bold
        w-full md:w-auto
        ${className}
      `}
    >
      {label}
    </Link>
  );
};
