import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MovieListView from "../screens/MovieListView";
import MovieDetails from "../screens/MovieDetails";

const defaultNavOptions = {
  headerTintColor: Platform.OS === "android" ? "white" : "blue",
};
const MoviesNavigator = createStackNavigator(
  {
    "Movie List": MovieListView,
    Details: MovieDetails,
  },

  { defaultNavOptions: defaultNavOptions }
);

export default createAppContainer(MoviesNavigator);
