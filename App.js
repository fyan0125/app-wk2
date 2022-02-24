import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ECB4B2', '#1D1818']}
        style={styles.container}
      >
      <StatusBar />
      <Header />
      <AlbumList />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
