import PosterCarrousel from "@/presentation/components/movies/PosterCarrousel";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarrousel movies={nowPlaying}/>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
