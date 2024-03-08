export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

export async function poster(url: string, { arg }: any) {
  console.log(arg);
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export const deleter = (url: string, data: any) => {
  const fullUrl = url + String(data.arg);
  fetch(fullUrl, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const updater = (url: string, data: any) =>
  fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
