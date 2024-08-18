import { Formatter } from "@/config/helpers/formatter";
import { Cast } from "@/core/entities/cast.entity";
import { FullMovie } from "@/core/entities/movie.entity";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CastActor from "../cast/CastActor";

interface MovieDetailsProps {
  movie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({ movie, cast }: MovieDetailsProps) => {
  let ratingBackgroundColor;
  if (movie.rating > 8) ratingBackgroundColor = "#2E7211";
  else if (movie.rating > 5) ratingBackgroundColor = "#ffb100";
  else ratingBackgroundColor = "650303";

  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              ...styles.text,
              padding: 10,
              borderRadius: 100,
              fontWeight: "bold",
              fontSize: 20,
              backgroundColor: ratingBackgroundColor,
            }}
          >
            {movie.rating}
          </Text>
          <Text
            style={{
              ...styles.text,
              marginLeft: 5,
              textAlignVertical: "center",
              fontSize: 16,
            }}
          >
            - {movie.genres.join(", ")}
          </Text>
        </View>

        <Text
          style={{
            ...styles.text,
            textDecorationLine: "underline",
            fontSize: 23,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Historia
        </Text>
        <Text style={{ ...styles.text, fontSize: 16 }}>
          {movie.description}
        </Text>
        <Text
          style={{
            ...styles.text,
            textDecorationLine: "underline",
            fontSize: 23,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Presupuesto
        </Text>
        <Text style={{ ...styles.text, fontSize: 18 }}>
          {Formatter.currency(movie.budget)}
        </Text>

        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text
            style={{
              ...styles.text,
              textDecorationLine: "underline",
              fontSize: 23,
              marginVertical: 10,
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            Actores
          </Text>
        </View>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor actor={item} />}
          style={{marginBottom: 50}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default MovieDetails;
