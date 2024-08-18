import { RootStackParams } from "@/App";
import MovieDetails from "@/presentation/components/movie/MovieDetails";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import useMovie from "@/presentation/hooks/useMovie";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Text, View } from "react-native";

interface DetailScreenProps
  extends StackScreenProps<RootStackParams, "Details"> {}

const DetailScreen = ({ route }: DetailScreenProps) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  );
};

export default DetailScreen;
