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

//const API_KEY = "9d74fe88-34f2-48ba-b0e9-4cc89c316f2d";

import { API_KEY } from "../constants/constants.js";

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

    const response = await fetch(
      "https://v2.api.noroff.dev/social/posts",
      fetchOptions
    );
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
