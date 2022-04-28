import React from "react";
import { View, Text, Button, Alert, Dimensions } from "react-native";
import DrinkCard from "../components/DrinkCard";

const { height, width } = Dimensions.get("window");

const Home = () => {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      {/* TODO: add in logo here */}

      {/* TODO: add subtext/catch phrase */}

      <DrinkCard />
    </View>
  );
};

// TODO: Add style sheet

export default Home;
