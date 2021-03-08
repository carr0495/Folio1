import React, { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  imgSrc: string;
  price: number;
  title: string;
  faved: boolean;
}

const App: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image
          style={{ width: 120, height: 120, borderRadius: 15 }}
          source={{
            uri: props.imgSrc,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={{ color: "#c2c2c2" }}>{props.title}</Text>
        <Text style={{ color: "#c2c2c2" }}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    // alignContent: "center",'
    backgroundColor: "#323234",
    width: 135,
    padding: 10,
    borderRadius: 15,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 0.5,
  },
  info: {},
});
