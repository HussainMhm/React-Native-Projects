import { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Home, SignUp } from "./screens";
import Tabs from "./navigation/tabs";

SplashScreen.preventAutoHideAsync();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export default function App() {
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
                initialRouteName="SignUp"
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
