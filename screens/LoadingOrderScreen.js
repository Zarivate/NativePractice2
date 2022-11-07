import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const LoadingOrderScreen = () => {
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
      <Progress.Circle size={60} indeterminate={true} color="yellow" />
    </SafeAreaView>
  );
};

export default LoadingOrderScreen;
