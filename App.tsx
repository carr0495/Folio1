import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MainNav } from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#39393a" }}>
      <MainNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
