import { movieDBFetcher } from "@/config/adapters/movieDB.adapter";
import { FullMovie } from "@/core/entities/movie.entity";
import { getMovieByIdUseCase } from "@/core/use-cases/movie/get-by-id.use-case";
import React, { useEffect, useState } from "react";

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await getMovieByIdUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return { isLoading, movie };
};

export default useMovie;
