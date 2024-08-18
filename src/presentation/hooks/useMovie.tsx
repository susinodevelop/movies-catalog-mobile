import { movieDBFetcher } from "@/config/adapters/movieDB.adapter";
import { Cast } from "@/core/entities/cast.entity";
import { FullMovie } from "@/core/entities/movie.entity";
import { getMovieByIdUseCase } from "@/core/use-cases/movie/get-by-id.use-case";
import { getMovieCastUseCase } from "@/core/use-cases/movie/get-cast.use-case";
import React, { useEffect, useState } from "react";

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  return { isLoading, movie, cast };
};

export default useMovie;
