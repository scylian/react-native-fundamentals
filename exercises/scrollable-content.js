import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

export default () => (
  <ScrollView style={styles.container}>
    <Square text="Square 1" />
    <Square text="Square 2" />
    <Square text="Square 3" />
    <Square text="Square 4" />
    <Square text="Square 5" />
    <Square text="Square 6" />
    <Square text="Square 7" />
    <Square text="Square 8" />
    <Square text="Square 9" />
    <Square text="Square 10" />
    <Square text="Square 11" />
    <Square text="Square 12" />
    <Square text="Square 13" />
    <Square text="Square 14" />
    <Square text="Square 15" />
  </ScrollView>
);
