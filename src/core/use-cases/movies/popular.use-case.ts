import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import type { Movie } from "@/core/entities/movie.entity";
import {
  NowPlayingResponse,
  PopularResponse,
} from "@/infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options
): Promise<Movie[]> => {
  try {
    const populars = await fetcher.get<PopularResponse>("/popular", {
      params: {
        page: options?.page ?? 1,
      },
    });
    return populars.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - Popular");
  }
};
