import { Movie } from "@/core/entities/movie.entity";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface HorizontalCarrouselProps {
  movies: Movie[];
  title?: string;
}

const HorizontalCarrousel = ({ movies, title }: HorizontalCarrouselProps) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 300,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default HorizontalCarrousel;
