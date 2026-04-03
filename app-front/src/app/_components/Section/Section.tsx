type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: Props) => {
  return (
    <section className="w-full mt-8">
      <h2>{title}</h2>
      <div className="flex items-center justify-center mx-4 mt-4 mb-4 md:mx-16">{children}</div>
    </section>
  );
};
