import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import { HeaderBar } from "../components";

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
