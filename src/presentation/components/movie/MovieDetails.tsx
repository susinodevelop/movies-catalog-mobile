import { Formatter } from "@/config/helpers/formatter";
import { Cast } from "@/core/entities/cast.entity";
import { FullMovie } from "@/core/entities/movie.entity";
import React from "react";
import { FlatList, Text, View } from "react-native";
import CastActor from "../cast/CastActor";

interface MovieDetailsProps {
  movie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({ movie, cast }: MovieDetailsProps) => {
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

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
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
        />
      </View>
    </>
  );
};

export default MovieDetails;
