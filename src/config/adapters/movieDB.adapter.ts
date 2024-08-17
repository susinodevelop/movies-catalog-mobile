import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "", //TODO cambiar valor por la api key de the movie DB
    language: "es",
  },
});
