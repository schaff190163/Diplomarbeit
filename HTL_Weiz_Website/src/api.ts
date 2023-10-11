import axios from "axios";

// Define the base URL for the API
const baseURL = "https://dev.htlweiz.at/wp-json/wp/v2/posts/";

// Define your username and password for authentication
const username = "vue_js";
const password = "6OceAv#$81v7S27qCH1FPQMu";

// Function to fetch data from the API
export async function fetchData() {
  try {
    // Create an Axios instance with the basic authentication headers
    const axiosInstance = axios.create({
      baseURL,
      auth: {
        username,
        password,
      },
    });

    // Make a GET request to the API
    const response = await axiosInstance.get<any[]>(``);

    // Check if the response status is 200 (OK) and return the data
    if (response.status === 200) {
      return response.data.map((post) => ({
        title: post.title.rendered,
        content: post.content.rendered,
        featuredImageURL: post._links["wp:attachment"][0].href,
      }));
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  } catch (error) {
    throw error;
  }
}
