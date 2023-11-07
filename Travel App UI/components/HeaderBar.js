import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const HeaderBar = ({ title, leftOnPress, right, containerStyle }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.padding,
                ...containerStyle,
            }}
        >
            {/* Back */}
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: COLORS.transparentBlack,
                }}
                onPress={leftOnPress}
            >
                <Image
                    source={icons.left_arrow}
                    resizeMode="contain"
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.white,
                    }}
                />
            </TouchableOpacity>

            {/* Title */}
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: right ? COLORS.transparentBlack : null,
                }}
            >
                {right && (
                    <Image
                        source={icons.settings}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white,
                        }}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default HeaderBar;
