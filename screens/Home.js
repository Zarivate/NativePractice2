import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  // Gives access to navigation object
  const navigation = useNavigation();

  // As soon as the screen appears on user device, do some sort of effect
  useLayoutEffect(() => {
    // Allows for certain screen properties to be changed
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // No matter phone type, SafeAreaView, will ensure it doesn't go to far above or below user's screen
    <SafeAreaView>
      <Text className="text-blue-500">
        <View>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
