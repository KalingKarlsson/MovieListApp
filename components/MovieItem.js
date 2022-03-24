import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
const MovieItem = (props) => {
  return (
    <TouchableOpacity onPress={props.checkDetails} style={styles.infoContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={{ uri: props.logo }}
          resizeMode="cover"
        ></Image>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  textContainer: {
    width: "75%",
    alignItems: "center",
    paddingVertical: 15,
  },
  infoContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  description: {
    fontSize: 9,
    textAlign: "center",
    marginLeft: 4,
  },
});

export default MovieItem;
