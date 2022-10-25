import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealSelected = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{mealSelected.title}</Text>
      <Button title="Go to Categories" onPress={() => {
        // Back to root screen
        props.navigation.popToTop();
      }}/>
    </View>
  );
};


// Add title to header
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealSelected = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: mealSelected.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('ici');
          }}
        />
      </HeaderButtons>
    )
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;