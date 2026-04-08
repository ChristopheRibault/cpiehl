interface Props {
  className?: string;
}

export const ChevronIcon = ({ className = "" }: Props) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 10l5 5 5-5"
      />
    </svg>
  );
};
