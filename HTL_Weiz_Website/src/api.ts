import axios from "axios";

export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: { footnotes: string };
  categories: number[];
  tags: string[];
  acf: any[];
  _links: any;
}


export class Api {
  private baseUrl = "https://dev.htlweiz.at/wp-json/wp/v2/";

  constructor() {}

  async getPosts(): Promise<Post[]> {
    const response = await axios.get(`${this.baseUrl}/posts`);
    return response.data as Post[];
  }

  async getPostById(id: number): Promise<Post> {
    const response = await axios.get(`${this.baseUrl}/posts/${id}`);
    return response.data as Post;
  }
}