import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Post, Messages, Favorites } from "../screens";

const Tab = createBottomTabNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
