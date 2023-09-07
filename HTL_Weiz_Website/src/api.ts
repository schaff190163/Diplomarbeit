import axios from "axios";

export interface Posts {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

const baseURL = "https://dev.htlweiz.at/wp-json/wp/v2/posts/";

const username = "vue_js";
const password = "6OceAv#$81v7S27qCH1FPQMu";

export async function fetchPosts(): Promise<Posts[]> {
  try {
    const response = await axios.get(baseURL);
    const posts: Posts[] = response.data.map((item: any) => ({
      id: item.id,
      date: item.date,
      title: {
        rendered: item.title.rendered,
      },
      content: {
        rendered: item.content.rendered,
      },
    }));
    return posts;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching posts:", error);
    throw error;
  }
}