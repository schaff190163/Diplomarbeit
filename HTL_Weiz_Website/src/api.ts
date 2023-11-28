import axios from 'axios';

const BASE_URL = 'https://dev.htlweiz.at/wordpress/wp-json';

export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export class Api {
  async getPosts(): Promise<Post[]> {
    try {
      const response = await axios.get(`${BASE_URL}/wp/v2/posts`);
      return response.data as Post[];
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
}
