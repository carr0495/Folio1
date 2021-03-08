import React, { FC } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/build/Ionicons";

interface Props {
  title: string;
  iconName: string;
}

const App: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Ionicons
          name={props.iconName}
          size={24}
          color="#c2c2c2"
          style={{ alignSelf: "center" }}
        />
      </View>
      <Text style={{ color: "#c2c2c2" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#39393a",
    alignSelf: "center",
    alignContent: "center",
    marginHorizontal: 5,
    width: 60,
    height: 60,
    padding: 2,
    borderRadius: 100,
    alignContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowRadius: 2,
    // borderWidth: 3,
    // borderColor: "#8d45c4",
  },
});
