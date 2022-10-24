import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TemplateScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Text screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TemplateScreen;