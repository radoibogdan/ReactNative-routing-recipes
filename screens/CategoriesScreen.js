import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          });
        }}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// CategoriesScreen is a function. A function is an object so we add the title property
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  
});

export default CategoriesScreen;
