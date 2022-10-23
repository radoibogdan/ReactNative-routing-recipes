import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MealsNavigator from "./navigation/MealsNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
        // Fake Await Time
        // await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontLoaded(true);
        console.log('Font true');
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log('onLayoutRootView');
    if (fontLoaded) {
      // hideAsync - Hide the splash screen after resources are loaded
      await SplashScreen.hideAsync();
      console.log('hideAsync');
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    console.log('return null');
    return null;
  }

  return (
    // <View style={styles.container} onLayout={onLayoutRootView}>
        <MealsNavigator loadNavigationState={onLayoutRootView}/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
