export const ArrowBrackets = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="65"
      viewBox="0 0 125 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M22.8721 87.0186H0.00341797V0.832031H22.8721V7.32617H7.70361V80.5244H22.8721V87.0186ZM124.691 87.0186H101.822V80.5244H116.898V7.32617H101.822V0.832031H124.691V87.0186Z"
        fill={color ? color : "#FF7D60"}
      />
    </svg>
  );
};
