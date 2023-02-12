import { MOVIES_API_URL } from "./constants";

export async function getAutsorsedMovies() {
  const res = await fetch(MOVIES_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }
  const data = await res.json();
  return data;
}


