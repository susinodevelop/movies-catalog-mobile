import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { Cast } from "@/core/entities/cast.entity";
import { MovieDBCastResponse } from "@/infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<Cast[]> => {
  const { cast } = await fetcher.get<MovieDBCastResponse>(
    `/${movieId}/credits`
  );
  return cast.map((actor) => CastMapper.fromMovieDbCastToEntity(actor));
  try {
  } catch (error) {
    throw new Error(`Cannot get movie ${movieId} cast`);
  }
};
