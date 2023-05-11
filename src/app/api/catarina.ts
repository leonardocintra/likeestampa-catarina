const BASE_URL = process.env.CATARINA_API_URL;

export default async function getData<T>(url: string) {
  const res = await fetch(`${BASE_URL}${url}`, {
    next: {
      revalidate: 10,
    },
    headers: {
      "Content-Type": "application/json",
      "firm-slug": "johnson-johnston-2b447612-b579-450d-922d-3121f794fc29",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsImVtYWlsIjoianVsaWFuYS5jaW50cmFAbHVpemFsYWJzLmNvbSIsImlhdCI6MTY4MzY2MjA4MiwiZXhwIjoxNjgzODM0ODgyfQ.EgxJIzbYzSqRS0LE3ite9u9A2wZ_BnIdJ7m-eplhaXQ",
    },
  });
  return res.json();
}
