import { fetchDataStrapi, strapiBaseUrl } from "@/data/strapi/loaders";
import qs from "qs";

export async function getCateories() {
  const url = new URL("/api/categories", strapiBaseUrl);

  return await fetchDataStrapi(url.href);
}
