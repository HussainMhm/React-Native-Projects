import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";

function HeaderSection({ profile }) {
    return (
        <View style={styles.container}>
            {/* Greetings */}
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                </View>
            </View>

            {/* Points */}
            <TouchableOpacity style={styles.pointsContainer} onPress={() => console.log("Points")}>
                <View style={styles.pointsInnerContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={icons.plus_icon} resizeMode="contain" style={styles.icon} />
                    </View>
                    <Text style={styles.text}>{profile.points} point</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default HeaderSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        alignItems: "center",
    },
    pointsContainer: {
        backgroundColor: COLORS.primary,
        height: 40,
        paddingLeft: 3,
        paddingRight: SIZES.radius,
        borderRadius: 20,
    },
    pointsInnerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        marginLeft: SIZES.base,
        color: COLORS.white,
        ...FONTS.body3,
    },
});
