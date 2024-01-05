interface ChevronLeftProps {
  enabled: boolean;
}
export function ChevronLeft({ enabled }: ChevronLeftProps) {
  return (
    <svg
      width="20"
      height="33"
      viewBox="0 0 20 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4207 2.0793L3 16.5L17.4207 30.9207"
        stroke="#323232"
        strokeOpacity={enabled ? 1 : 0.6}
        strokeWidth="3.72147"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ChevronRightProps {
  enabled: boolean;
}
export function ChevronRight({ enabled }: ChevronRightProps) {
  return (
    <svg
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.73885 31.4081L17.1595 16.9874L2.73885 2.56673"
        stroke="#323232"
        strokeOpacity={enabled ? 1 : 0.6}
        strokeWidth="3.72147"
        strokeLinecap="round"
      />
    </svg>
  );
}

