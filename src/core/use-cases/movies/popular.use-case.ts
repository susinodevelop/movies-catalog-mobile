import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import type { Movie } from "@/core/entities/movie.entity";
import {
  NowPlayingResponse,
  PopularResponse,
} from "@/infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const populars = await fetcher.get<PopularResponse>("/popular");
    return populars.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - Popular");
  }
};
