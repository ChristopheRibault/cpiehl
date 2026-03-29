import { createClient } from "@sanity/client";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

const config = {
  projectId: "pi0d4qbq",
  dataset: "production",
  apiVersion: "2026-03-19",
  useCdn: true,
};

export const sanityClient = createClient(config);
export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}
