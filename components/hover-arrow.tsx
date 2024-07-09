import classNames from "classnames";
import { ArrowBrackets } from "./svgs/arrow-brackets";
import { ArrowDown } from "./svgs/arrow-down";

export const HoverArrow = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <div className={classNames("w-[65px]", className)}>
      <ArrowBrackets color={color} className="transition-all" />
      <ArrowDown
        color={color}
        className="transition-all absolute left-[20px] bottom-[9px] -rotate-45 sm:group-hover/card:rotate-0"
      />
    </div>
  );
};
