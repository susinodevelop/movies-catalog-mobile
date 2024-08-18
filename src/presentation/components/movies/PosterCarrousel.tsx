import { Movie } from "@/core/entities/movie.entity";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface PosterCarrouselProps {
  movies: Movie[];
  height?: number;
}

const PosterCarrousel = ({ movies, height = 440 }: PosterCarrouselProps) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PosterCarrousel;
