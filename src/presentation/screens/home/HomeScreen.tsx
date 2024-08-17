import HorizontalCarrousel from "@/presentation/components/movies/HorizontalCarrousel";
import PosterCarrousel from "@/presentation/components/movies/PosterCarrousel";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarrousel movies={nowPlaying} />
        <HorizontalCarrousel movies={popular} title="Populares" loadNextPage={popularNextPage}/>
        <HorizontalCarrousel movies={topRated} title="Mejor Calificadas" />
        <HorizontalCarrousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
