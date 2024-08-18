import FullScreenLoader from "@/presentation/components/loaders/FullScreenLoader";
import HorizontalCarrousel from "@/presentation/components/movies/HorizontalCarrousel";
import PosterCarrousel from "@/presentation/components/movies/PosterCarrousel";
import { useMovies } from "@/presentation/hooks/useMovies";
import BackgroundImage from "@images/home-background.jpg";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
          <PosterCarrousel movies={nowPlaying} />
          <HorizontalCarrousel
            movies={popular}
            title="Populares"
            loadNextPage={popularNextPage}
          />
          <HorizontalCarrousel movies={topRated} title="Mejor Calificadas" />
          <HorizontalCarrousel movies={upcoming} title="Próximamente" />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
export default HomeScreen;
