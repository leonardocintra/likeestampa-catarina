import { fetchDataStrapi, strapiBaseUrl } from "@/data/strapi/loaders";
import qs from "qs";

export async function getProducts() {
  const url = new URL("/api/products", strapiBaseUrl);

  url.search = qs.stringify({
    populate: {
      sub_category: {
        populate: true,
      },
      mocks: {
        populate: true,
      },
    },
  });

  return await fetchDataStrapi(url.href);
}

export async function getProductBySlug(slug: string) {
  const url = new URL("/api/products", strapiBaseUrl);

  url.search = qs.stringify({
    populate: {
      sub_category: {
        populate: true,
      },
      mocks: {
        populate: true,
      },
      product_models: {
        populate: {
          product_sizes: {
            fields: ["id, description", "customerDescription", "slug"],
          },
          product_colors: {
            fields: ["id", "description", "slug", "value"],
          },
        },
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  return await fetchDataStrapi(url.href);
}
