import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchBar, CIButton, ListingBox } from "../components";
import Ionicons from "@expo/vector-icons/build/Ionicons";

const App: FC = () => {
  return (
    <View style={styles.container}>
      {/* TODO clean up into component */}
      <View style={styles.header}>
        <Text style={styles.logo}>Kijiji</Text>
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 0,
              height: 1.5,
            },
            shadowColor: "#000",
            shadowRadius: 1.5,
            shadowOpacity: 0.5,
          }}
        >
          <Ionicons
            name="notifications-circle"
            size={54}
            color="#a064ce"
            style={{ alignSelf: "center", marginTop: 15 }}
          />
        </TouchableOpacity>
      </View>

      <SearchBar />
      {/* TODO clean up into component */}
      <View style={styles.iconBar}>
        <CIButton title="Buy" iconName="card" />
        <CIButton title="Sell" iconName="wallet-outline" />
        <CIButton title="Cars" iconName="car" />
        <CIButton title="Estate" iconName="home" />
        <CIButton title="All" iconName="apps" />
      </View>
      <ListingBox
        imgSrc="https://picsum.photos/200/200"
        faved={true}
        title="random Image"
        price={34}
      />
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
    color: "#323234",
    fontWeight: "bold",
    textShadowOffset: {
      width: 0,
      height: 1.5,
    },
    textShadowColor: "#000",
    textShadowRadius: 3,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
  },
});
