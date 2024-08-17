import { Formatter } from "@/config/helpers/formatter";
import { FullMovie } from "@/core/entities/movie.entity";
import React from "react";
import { Text, View } from "react-native";

interface MovieDetailsProps {
  movie: FullMovie;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text>{movie.rating}</Text>
        </View>
        <Text style={{ marginLeft: 5 }}>- {movie.genres.join(", ")}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>{Formatter.currency(movie.budget)}</Text>
      </View>
    </>
  );
};

export default MovieDetails;
