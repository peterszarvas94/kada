interface CircleProps {
  filled: boolean;
}
export function Circle({ filled }: CircleProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5.48596"
        cy="5.48596"
        r="5.48596"
        fill={filled ? "#6100FF" : "#323232"}
        opacity={filled ? 1 : 0.6}
      />
    </svg>
  );
}
