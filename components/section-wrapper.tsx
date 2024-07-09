import classNames from "classnames";

export const SectionWrapper = ({
  children,
  className,
  id,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      ref={ref}
      id={id}
      className={classNames(
        "px-6 py-16 pb-28 sm:px-22 lg:px-52 lg:pt-36 lg:pb-48 max-w-[1600px] mx-auto flex flex-col w-full",
        className
      )}
    >
      {children}
    </section>
  );
};
