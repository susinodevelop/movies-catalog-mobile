import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import type { Movie } from "@/core/entities/movie.entity";
import { UpcomingResponse } from "@/infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
  options?: Options
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>("/upcoming", {
      params: {
        page: options?.page ?? 1,
      },
    });
    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - Upcoming");
  }
};
