import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

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
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        {/* Header goes here */}
        <View className="flex flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          {/* Find a way to get the top view to properly take up the correct space regardless of user screen size */}
          <View className="flex-1 w-[75vw]">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={13} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Searchbar here */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 w-[87vw] space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisine"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
