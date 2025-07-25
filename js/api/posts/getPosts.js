import { API_URL_BASE } from "../constants.js";

export async function getPosts() {
  const response = await fetch(API_URL_BASE + "/social/posts", {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });

  return await response.json();
}
