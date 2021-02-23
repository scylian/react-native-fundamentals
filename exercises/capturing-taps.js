// Capturing User Taps

// TIP: Button is a component exposed by React Native. You'll import it the same way you did View
// and Text previously.

import React from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";

export default () => {
  // Replace return null with your code.
  return (
    <View>
      <Button title="Button 1" onPress={() => alert("hello!")} />
      <TouchableOpacity
        onPress={() => alert("hello 2")}
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};
