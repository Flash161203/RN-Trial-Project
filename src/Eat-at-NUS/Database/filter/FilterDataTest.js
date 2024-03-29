// Importing the required stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import filterData from "./FilterData";

const FilterDataTest = () => {
  const filterPress = async () => {
    const result = await filterData("s", ["Taiwanese"]);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Text>Filter Data Test</Text>
      <Text
        onPress={() => {
          console.log("Pressed");
          filterPress();
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

export default FilterDataTest;
