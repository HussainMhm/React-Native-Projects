import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
                    backgroundColor: COLORS.black,
                    borderTopColor: "transparent",
                    height: Platform.OS === "android" ? 75 : 100,
                },
            }}
        >
            <Tab.Screen
                name="DashboardTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                source={icons.maps}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.blue : COLORS.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="BookmarkTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={icons.bookmark}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.blue : COLORS.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="CalendarTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={icons.calendar}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.blue : COLORS.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="PlaneTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={icons.plane}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.blue : COLORS.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.blue,
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
