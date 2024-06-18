import classNames from "classnames";

export const SectionWrapper = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "px-10 py-16 pb-28 sm:px-22 lg:px-52 lg:pt-36 lg:pb-48 max-w-[1600px] mx-auto flex flex-col w-full",
        className
      )}
    >
      {children}
    </section>
  );
};
