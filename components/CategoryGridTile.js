import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  // or navigate('CategoryMeals', {categoryId: YOUR-DATA})
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {" "}
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 3, // android
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black", // ios
    shadowOpacity: 0.26, // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 10, // ios
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
