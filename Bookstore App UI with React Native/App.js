import React, { useCallback } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font"; // for custom fonts
import * as SplashScreen from "expo-splash-screen"; // for custom fonts

import { BookDetail } from "./screens";
import Tabs from "./navigation/tabs";

SplashScreen.preventAutoHideAsync(); // for custom fonts

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

function App(props) {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer theme={theme} onReady={onLayoutRootView}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"Home"}
            >
                {/* {Tabs} */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* {Screens} */}
                <Stack.Screen
                    name="BookDetail"
                    component={BookDetail}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
