import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const Rating = ({ containerStyle, rate }) => {
    const starComponents = [];

    for (var i = 0; i < rate; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.star}
                resizeMode="cover"
                style={{
                    width: 15,
                    height: 15,
                    marginLeft: i == 0 ? 0 : 5,
                }}
            />
        );
    }

    return <View style={{ flexDirection: "row", ...containerStyle }}>{starComponents}</View>;
};

export default Rating;
