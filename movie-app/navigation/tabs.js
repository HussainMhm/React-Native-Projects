import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { COLORS, icons } from "../constants";

import { TabIcon } from "../components";

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
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />,
                }}
            />
            <Tab.Screen
                name="PlayTab"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.play_button} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} />,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.profile} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
