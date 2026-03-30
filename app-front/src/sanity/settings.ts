import { client } from "@/sanity/client";

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{ siteTitle, siteDescription, logo{asset->{url}}, primaryColor, secondaryColor, tertiaryColor }`,
  );
}
