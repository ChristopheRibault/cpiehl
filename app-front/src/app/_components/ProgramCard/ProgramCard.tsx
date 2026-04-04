import { Program } from "@/sanity/schemas/program";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/Button/Button";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="flex flex-col gap-4 p-4 w-full justify-center items-center">
      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
      {program.pdfDocument?.preview?.asset?.url && (
        <Link href={program.pdfDocument?.file?.asset?.url} target="_blank">
          <Image
            src={program.pdfDocument.preview.asset.url}
            alt={program.pdfDocument.preview.alt || program.title}
            width={600}
            height={400}
            className="mb-2"
          />
        </Link>
      )}
      {program.link && (
        <Link href={"/"}>
          <Button>{program.link.label || "Voir le programme"}</Button>
        </Link>
      )}
    </article>
  );
}
