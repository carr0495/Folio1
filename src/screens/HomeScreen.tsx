import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "../components";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kijiji</Text>
      <SearchBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39393a",
  },
  logo: {
    fontSize: 70,
    margin: 5,
    color: "#39393a",
    fontWeight: "bold",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "#000",
    textShadowRadius: 2,
  },
});
