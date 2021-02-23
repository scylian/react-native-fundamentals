import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
});

export default () => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        value={input}
        onChangeText={(value) => setInput(value)}
      />
      <Button
        title="Say Hello"
        onPress={() => {
          setInput('');
          alert(`Hello, ${input}!`);
        }}
      />
    </View>
  );
};
