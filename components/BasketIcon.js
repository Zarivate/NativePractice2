import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { basketTotal, selectBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  // How access to the basket items is reached, through the use of Redux's useSelector
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();

  const userTotal = useSelector(basketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity>
        <Text>{items.length}</Text>
        <Text>View Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
