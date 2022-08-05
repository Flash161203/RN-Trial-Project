// Importing the required stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import addReview from "./AddReview";

const AddReviewTest = () => {
  return (
    <View style={styles.container}>
      <Text>Add Review Test</Text>
      <Text
        onPress={() => {
          console.log("Pressed");
          addReview(
            "-N76rICVGyYnqh1ewsgQ",
            "lKXwhClDwba0UYcliCg8CVHo02H2/",
            4,
            "Nalla irundhuchu",
            "God"
          );
        }}>
        Press to check
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddReviewTest;
