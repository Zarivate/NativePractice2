import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import client from "../server/sanity";

const Home = () => {
  // Gives access to navigation object
  const navigation = useNavigation();

  // State for displaying featured dishes
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // As soon as the screen appears on user device, do some sort of effect
  useLayoutEffect(() => {
    // Allows for certain screen properties to be changed
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // On initial load of app, data is being fetched from Sanity backend
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header goes here */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        {/* Find a way to get the top view to properly take up the correct space regardless of user screen size */}
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={13} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Searchbar here */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* This is where the Body/scrollable content goes  */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Food Categories here */}
        <Categories />
        {/* Fetured cuisine goes here */}
        <Featured
          id="1"
          title="Featured"
          description="We were paid to put these here"
        />
        <Featured
          id="2"
          title="Tasty Discounts"
          description="These discounts are as tasty as the food!"
        />
        <Featured
          id="3"
          title="Ofers near you!"
          description="Support your local restaurants today"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
