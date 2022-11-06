import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

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
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-4 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
