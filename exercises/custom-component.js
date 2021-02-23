// Creating a Custom Component
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, buttonStyle = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#f08080",
      paddingHorizontal: 10,
      paddingVertical: 10,
      alignSelf: "center",
      margin: 10,
      ...buttonStyle
    }}
  >
    <Text style={{ color: "#fff" }}>{text}</Text>
  </TouchableOpacity>
);

export default () => {
  return (
    <View>
      <CustomButton text="Say hello" onPress={() => alert("hello!")} />
      <CustomButton
        text="Say goodbye"
        onPress={() => alert("goodbye!")}
        buttonStyle={{ backgroundColor: "#3EB489" }}
      />
    </View>
  );
};
