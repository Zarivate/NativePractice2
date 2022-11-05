import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();

  // If the value of items isn't changed, the value won't be recomputed
  useMemo(() => {
    // Loop through items in basket
    const groupedItems = items.reduce((results, item) => {
      // An object is created where, if the select key exists, then go and push the item into that key. Essentially
      // if multiple of the same item is found, there will be one set key for all those duplicate items
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(groupedItems);
  }, [items]);

  console.log(groupedItems);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
