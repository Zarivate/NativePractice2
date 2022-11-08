import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const LoadingOrderScreen = () => {
  // Since there isn't an actual restaurant to accept the orders, it's simulated using a useEffect after some time
  const navigation = useNavigation();

  // After a few seconds the screen is navigated back to the final delivery screen
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-86 w-86"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-black font-bold text-center"
      >
        Waiting on restaurant to accept order
      </Animatable.Text>
      <Progress.CircleSnail size={50} color="black" />
    </SafeAreaView>
  );
};

export default LoadingOrderScreen;
