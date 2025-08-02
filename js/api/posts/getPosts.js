// import { API_URL_BASE } from "../constants.js";

import { loadKey } from "../../utils/storage/loadKey.js";

// export async function getPosts() {
//   const response = await fetch(API_URL_BASE + "/social/posts", {
//     headers: {
//       Authorization: `Bearer ${load("token")}`,
//       "X-Noroff-API-Key": API_KEY,
//     },
//   });

//   return await response.json();
// }

const displayContainer = document.getElementById("display-container");
//console.log(displayContainer);

import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

export async function fetchPosts() {
  try {
    const accessToken = loadKey("accessToken");
    //console.log(accessToken);

    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
    };
    //console.log(fetchOptions);

    const response = await fetch(API_BASE_URL + API_POSTS, fetchOptions);
    const json = await response.json();
    //console.log(json);
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

function main() {
  fetchPosts();
}

main();
