import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import { getItem } from "../utils/asyncStorage";

const Stack = createNativeStackNavigator();

function AppNavigation(props) {
    const [showOnboarding, setShowOnboarding] = useState(null);

    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, []);

    async function checkIfAlreadyOnboarded() {
        let onboarded = await getItem("onboarded");
        console.log("onboarded: ", onboarded);
        if (onboarded == 1) {
            // Hide onboarding
            setShowOnboarding(false);
        } else {
            // Show onboarding
            setShowOnboarding(true);
        }
    }

    if (showOnboarding == null) return null;

    if (showOnboarding) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Onboarding">
                    <Stack.Screen
                        name="Onboarding"
                        options={{ headerShown: false }}
                        component={OnboardingScreen}
                    />
                    <Stack.Screen
                        name="Home"
                        options={{ headerShown: false }}
                        component={HomeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Onboarding"
                        options={{ headerShown: false }}
                        component={OnboardingScreen}
                    />
                    <Stack.Screen
                        name="Home"
                        options={{ headerShown: false }}
                        component={HomeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AppNavigation;
