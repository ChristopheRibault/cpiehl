type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: Props) => {
  return (
    <section className="w-full mt-8">
      <h2>{title}</h2>
      <div className="mx-4 mt-4 mb-4 md:mx-16 flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};
