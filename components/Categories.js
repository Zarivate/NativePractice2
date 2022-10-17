import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Card component goes here */}
      <CategoryCard
        imgUrl="https://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls-scaled.jpg"
        title="Test 1"
      />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 6" />
    </ScrollView>
  );
};

export default Categories;
