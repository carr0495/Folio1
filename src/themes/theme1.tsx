import React from "react";
import { Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width, height } = Dimensions.get("screen");
export default {
  colors: {
    purple_main: "#6D319B",
    light_gray: "#E6E6E6",
    normal_gray: "#D6D6D6",
    dark_gray: "#C2C2C2",
    onyx_gray: "#39393A",
  },
  container_card: {
    width: width / 1.1,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "39393A",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "#ccc",
    shadowOpacity: 0.9,
  },
  container_main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
