import { fetchDataStrapi, strapiBaseUrl } from "@/data/strapi/loaders";
import { unstable_noStore } from "next/cache";

export async function getCateories() {
  unstable_noStore();

  const url = new URL("/api/categories", strapiBaseUrl);

  return await fetchDataStrapi(url.href);
}
