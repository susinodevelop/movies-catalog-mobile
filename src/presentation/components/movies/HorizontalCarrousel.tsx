import { Movie } from "@/core/entities/movie.entity";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface HorizontalCarrouselProps {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const HorizontalCarrousel = ({
  movies,
  title,
  loadNextPage,
}: HorizontalCarrouselProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

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
            color: "white",
            textShadowColor: "white",
            textShadowOffset: {
              width: 1,
              height: 1,
            },
            textShadowRadius: 20,
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
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
export default HorizontalCarrousel;
