import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "react-navigation-tabs";

const MealsNavigator = createStackNavigator(
  {
    Categories: { 
      screen: CategoriesScreen,
      // Style each screen or use defaultNavigationOptions below for all screens
      // navigationOptions : {
      //   headerTitle: "Meal Categories"
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      //   },
      //   headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      // }
    },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

// We can nest multiple navigators
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);