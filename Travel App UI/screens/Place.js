import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { HeaderBar, TextIconButton } from "../components";

const Place = ({ route, navigation }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        let { selectedPlace } = route.params;
        setSelectedPlace(selectedPlace); // there might be a conflict here
    }, []);

    function renderPlace() {
        return (
            <ImageBackground
                source={selectedPlace?.image}
                style={{ width: "100%", height: "100%" }}
            >
                <HeaderBar
                    title=""
                    leftOnPress={() => navigation.goBack()}
                    right={false}
                    containerStyle={{
                        marginTop: SIZES.padding * 2,
                    }}
                />

                {/* Container */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        paddingHorizontal: SIZES.padding,
                        marginBottom: 100,
                    }}
                >
                    {/* Name and Ratings */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: SIZES.base,
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
                            {selectedPlace?.name}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: COLORS.white, ...FONTS.h2, marginRight: 8 }}>
                                {selectedPlace?.rate}
                            </Text>
                            <Image
                                source={icons.star}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                        {selectedPlace?.description}
                    </Text>

                    {/* Button */}
                    <TextIconButton
                        label="Book a flight"
                        icon={icons.aeroplane}
                        customLabelStyle={{ ...FONTS.h2 }}
                        customContainerStyle={{ marginTop: SIZES.padding }}
                        onPress={() => console.log("Book a flight")}
                    />
                </View>
            </ImageBackground>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {renderPlace()}
        </View>
    );
};

export default Place;
