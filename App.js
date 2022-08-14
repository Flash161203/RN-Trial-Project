import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Set App.js as entry point
// import { registerRootComponent } from 'expo';

// Upload Image Test
import UploadImageTest from "./src/Eat-at-NUS/ImageHandling/UploadImageTest";

// Retrieve Image Test
import RetrieveImageTest from "./src/Eat-at-NUS/ImageHandling/RetrieveImageTest";

// Retrieve Stall Image Test
import RetrieveStallImageTest from "./src/Eat-at-NUS/ImageHandling/RetrieveStallImageTest";

// Delete Image Test
import DeleteImageTest from "./src/Eat-at-NUS/ImageHandling/DeleteImageTest";

// Filter Data Test
import FilterDataTest from "./src/Eat-at-NUS/Database/filter/FilterDataTest";

// Add Review Test
import AddReviewTest from "./src/Eat-at-NUS/Database/AddReviewTest";

const App = () => {
  // return (
  //   <View style={styles.container}>
  //     <Text>Hola!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // UploadImage Test
  // return (
  //   <UploadImageTest />
  // );

  // RetrieveImage Test
  // return (
  //   <RetrieveImageTest />
  // );

  // Retrieve Stall Image Test
  // return (
  //   <RetrieveStallImageTest />
  // );

  // Delete Image Test
  // return <DeleteImageTest />;

  // Filter Data Test
  return <FilterDataTest />;

  // Add Review Test
  // return <AddReviewTest />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default registerRootComponent(App);
export default App;
