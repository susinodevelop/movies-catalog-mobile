import { movieDBFetcher } from "@/config/adapters/movieDB.adapter";
import { Movie } from "@/core/entities/movie.entity";
import { moviesNowPlayingUseCase } from "@/core/use-cases/movies/now-playing.use-case";
import { moviesPopularUseCase } from "@/core/use-cases/movies/popular.use-case";
import { moviesTopRatedUseCase } from "@/core/use-cases/movies/top-rated.use-case";
import { moviesUpcomingUseCase } from "@/core/use-cases/movies/upcoming.use-case";
import { useEffect, useState } from "react";

let nowPlayingPageNumber = 1;
let popularPageNumber = 1;
let topRatedPageNumber = 1;
let upcomingPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    nowPlayingNextPage: async () => {
      nowPlayingPageNumber++;
      const nowPlayingMovies = await moviesNowPlayingUseCase(movieDBFetcher, {
        page: nowPlayingPageNumber,
      });
      setNowPlaying((prev) => [...prev, ...nowPlayingMovies]);
    },

    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber,
      });
      setPopular((prev) => [...prev, ...popularMovies]);
    },

    topRatedNextPage: async () => {
      topRatedPageNumber++;
      const topRatedMovies = await moviesTopRatedUseCase(movieDBFetcher, {
        page: topRatedPageNumber,
      });
      setNowPlaying((prev) => [...prev, ...topRatedMovies]);
    },

    upcomingNextPage: async () => {
      upcomingPageNumber++;
      const upcomingMovies = await moviesUpcomingUseCase(movieDBFetcher, {
        page: upcomingPageNumber,
      });
      setNowPlaying((prev) => [...prev, ...upcomingMovies]);
    },
  };
};
