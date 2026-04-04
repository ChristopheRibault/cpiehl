import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`
        px-4 py-2
        bg-primary text-white
        font-semibold text-lg
        rounded
        cursor-pointer
        border-0
        hover:opacity-90
        transition-opacity duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
