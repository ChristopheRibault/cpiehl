type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: Props) => {
  return (
    <section className="w-full">
      <h2>{title}</h2>
      <div className="mx-16 mt-4 mb-12">{children}</div>
    </section>
  );
};
