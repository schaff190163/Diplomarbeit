import axios from "axios";

export interface Posts {
  id: number;
  date: string;
  title: string;
  content: string;
  excerpt
}

const baseURL = "https://dev.htlweiz.at/wp-json/wp/v2/posts/";

export async function fetchSongs(): Promise<Song[]> {
  const response = await axios.get<Song[]>(`${baseURL}songs/?format=json`);
  return response.data.map((song) => ({
    ...song,
    audiofile: baseURL + song.audiofile,
    coverimg: baseURL + song.coverimg,
  }));
}
