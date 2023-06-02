const BASE_URL = process.env.CATARINA_API_URL;

export default async function catarinaGetData<T>(url: string) {
  const res = await fetch(`${BASE_URL}${url}`, {
    next: {
      revalidate: 10,
    },
    headers: {
      "Content-Type": "application/json",
      "firm-slug": `${process.env.CATARINA_FIRM_ID}`,
      Authorization: `Bearer ${process.env.CATARINA_API_TOKEN}`,
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    console.error(res.status);
  }
}
