import { fetchDataStrapi, strapiBaseUrl } from "@/data/strapi/loaders";

export async function getSubCategories() {
  const url = new URL("/api/sub-categories", strapiBaseUrl);

  return await fetchDataStrapi(url.href);
}
