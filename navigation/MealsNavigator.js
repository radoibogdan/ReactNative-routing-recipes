import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categpries: CategoriesScreen,
  CategoryMeal: { 
    screen: CategoryMealsScreen 
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);