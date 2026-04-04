"use client";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton = ({ isOpen, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      aria-controls="navigation"
      className="
        flex flex-col gap-1.5 p-2
        text-secondary
        cursor-pointer
        transition-colors duration-200
      "
    >
      {/* Ligne du haut */}
      <span
        className={`
          block w-6 h-0.5 bg-current
          transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"}
        `}
      />
      {/* Ligne du milieu */}
      <span
        className={`
          block w-6 h-0.5 bg-current
          transition-all duration-300
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
      />
      {/* Ligne du bas */}
      <span
        className={`
          block w-6 h-0.5 bg-current
          transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"}
        `}
      />
    </button>
  );
};
