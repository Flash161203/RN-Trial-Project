import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Set App.js as entry point
// import { registerRootComponent } from 'expo';

// Upload Image Test
import UploadImageTest from './src/Eat-at-NUS/ImageHandling/UploadImageTest';

// Retrieve Image Test
import RetrieveImageTest from './src/Eat-at-NUS/ImageHandling/RetrieveImageTest';


const App = () => {
  
  // return (
  //   <View style={styles.container}>
  //     <Text>Hola!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // UploadImage Test
  return (
    <UploadImageTest />
  );

  // RetrieveImage Test
  // return (
  //   <RetrieveImageTest />
  // );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default registerRootComponent(App);
export default App;
