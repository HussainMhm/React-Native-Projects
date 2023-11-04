import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

function Tabs(props) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: COLORS.black, height: "10%" },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "HomeTab":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );

                        case "SearchTab":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );

                        case "NotificationTab":
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );

                        case "SettingsTab": // "Setting" in the video
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                    }
                },
            })}
        >
            <Tab.Screen name="HomeTab" component={Home} />
            <Tab.Screen name="SearchTab" component={Home} />
            <Tab.Screen name="NotificationTab" component={Home} />
            <Tab.Screen name="SettingsTab" component={Home} />
        </Tab.Navigator>
    );
}

export default Tabs;
