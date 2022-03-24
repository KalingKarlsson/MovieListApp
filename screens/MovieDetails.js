import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://playground.devskills.co/api/rest/movie-app/movies/${props.navigation.getParam("id")}`)
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <Text style={{ display: flex, justifyContent: "center", alignItems: "center" }}>Loading...</Text>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={{ uri: movie.movie_app_movies_by_pk && movie.movie_app_movies_by_pk.logo }}
              resizeMode="cover"
            ></Image>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{movie.movie_app_movies_by_pk && movie.movie_app_movies_by_pk.title}</Text>
            <Text style={styles.movieDetails}>Action, Comedy, Drama</Text>
            <View style={styles.rating}>
              <Ionicons style={{ paddingRight: 5 }} name="ios-star" size={22} color={"#FCE205"} />
              <Text style={styles.movieDetails}>
                {movie.movie_app_movies_by_pk && movie.movie_app_movies_by_pk.rating} / 10
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.description}>
              {movie.movie_app_movies_by_pk && movie.movie_app_movies_by_pk.description}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  movieDetails: {
    fontSize: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 28,
  },
  description: {
    fontSize: 16,
    marginTop: 32,
    width: "80%",
  },
  rating: {
    flexDirection: "row",
  },
  screen: {
    flex: 1,
  },
  textContainer: {
    marginLeft: 10,
    marginVertical: 2,
  },
});

export default MovieDetails;
