export const SectionTitle = ({
  title,
  color,
}: {
  title: string;
  color?: string;
}) => {
  return (
    <div>
      <h2
        className="text-3xl font-medium font-header"
        style={{
          color: color ?? "",
        }}
      >
        {title.toUpperCase()}
      </h2>
      <div
        className="w-full h-[3px] bg-primary mt-4"
        style={{
          background: color ?? "",
        }}
      ></div>
    </div>
  );
};
