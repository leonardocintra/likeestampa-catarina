import { fetchDataStrapi, strapiBaseUrl } from "@/data/strapi/loaders";
import { unstable_noStore } from "next/cache";

export async function getProductTypes() {
  unstable_noStore();

  const url = new URL("/api/product-types", strapiBaseUrl);

  return await fetchDataStrapi(url.href);
}
