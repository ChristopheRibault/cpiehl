import { ImagesGallery } from "@/sanity/schemas/sections/imageGallery";
import Image from "next/image";

export function ImageGallery({
  content,
}: {
  content: ImagesGallery["images"] | undefined;
}) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4 md:my-6">
      {content.map((image, index) => (
        <div key={image.asset.url} className="w-full h-auto">
          <Image
            src={image.asset.url}
            alt={image.alt || `Image ${index + 1}`}
            className="w-full h-auto object-cover rounded"
            width={700}
            height={700}
          />
        </div>
      ))}
    </div>
  );
}
