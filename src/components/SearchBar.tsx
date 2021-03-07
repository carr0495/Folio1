import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Search..."
        placeholderTextColor="#c2c2c2"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#39393A",
    margin: 10,
    padding: 8,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 1.2,
  },
  text: {
    color: "#c2c2c2",
  },
});
