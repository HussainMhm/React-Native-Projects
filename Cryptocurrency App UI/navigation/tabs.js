import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { COLORS, FONTS, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{ top: -30, justifyContent: "center", alignItems: "center", ...styles.shadow }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{ width: 70, height: 70, borderRadius: 35 }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const Tabs = () => {
    function renderTabIcon({ focused, text, iconName }) {
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={icons[iconName]}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? COLORS.primary : COLORS.black,
                    }}
                />
                <Text
                    style={{
                        color: focused ? COLORS.primary : COLORS.black,
                        ...FONTS.body5,
                    }}
                >
                    {text}
                </Text>
            </View>
        );
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabIcon({ focused, text: "Home", iconName: "home" }),
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabIcon({ focused, text: "Portfolio", iconName: "pie_chart" }),
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.transaction}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: COLORS.white }}
                        />
                    ),
                    tabBarButton: (props) => <TabBarCustomButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabIcon({ focused, text: "Prices", iconName: "line_graph" }),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        renderTabIcon({ focused, text: "Settings", iconName: "settings" }),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Tabs;
