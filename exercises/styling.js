// Styling
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  box: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Square = ({ bgColor = "#add8e6", text }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

export default () => (
  <View
    style={styles.container}
  >
    <Square text="Square 1" />
    <Square text="Square 2" bgColor="#3EB489" />
    <Square text="Square 3" bgColor="#F08080" />
  </View>
);
