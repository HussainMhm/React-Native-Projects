import React from "react";
import { View, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const CurrencyLabel = ({ icon, currency, code }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    marginTop: 5,
                    width: 25,
                    height: 25,
                }}
            />
            <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h3 }}>{currency}</Text>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{code}</Text>
            </View>
        </View>
    );
};

export default CurrencyLabel;
