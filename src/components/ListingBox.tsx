import React, { FC } from "react";
import { View, Text } from "react-native";

interface Props {
  imgSrc: string;
  price: number;
  title: string;
  faved: boolean;
}

const App: FC<Props> = (props) => {
  return (
    <View>
      <Text>Listing!</Text>
    </View>
  );
};
