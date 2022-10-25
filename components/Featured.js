import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCards from "./RestaurantCards";
import client from "../server/sanity";

const Featured = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  // useEffect to retrieve only the restaurant data with a matching id to be displayed
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]`,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  console.log(restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards go here */}
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="It is edible"
          rating="3.3"
          genre="Mongolian"
          address="1600 Pennsylvania Avenue"
          short_description="testing short description"
          dishes={[]}
          long={20.7}
          lat={0.5}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="It is edible"
          rating="3.3"
          genre="Mongolian"
          address="1600 Pennsylvania Avenue"
          short_description="testing short description"
          dishes={[]}
          long={20.7}
          lat={0.5}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="It is edible"
          rating="3.3"
          genre="Mongolian"
          address="1600 Pennsylvania Avenue"
          short_description="testing short description"
          dishes={[]}
          long={20.7}
          lat={0.5}
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
