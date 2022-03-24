import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import MovieItem from "../components/MovieItem";

const MovieListView = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://playground.devskills.co/api/rest/movie-app/movies")
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  console.table(movies);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {movies.movie_app_movies.map((item, key) => (
            <View key={key}>
              <MovieItem
                logo={item.logo}
                title={item.title}
                description={item.description}
                checkDetails={() => {
                  props.navigation.navigate("Details", {
                    logo: item.logo,
                    title: item.title,
                    description: item.description,
                    id: item.id,
                  });
                }}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default MovieListView;
