import React, { useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, Image, Platform } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { HeaderBar, Rating, TextButton, TextIconButton } from "../components";
import MapStyle from "../styles/MapStyle";

const Place = ({ route, navigation }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);

    let _panel = useRef(null);

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

    function renderMap() {
        return (
            <SlidingUpPanel
                ref={(c) => (_panel = c)}
                draggableRange={{ top: SIZES.height + 120, bottom: 120 }}
                showBackdrop={false}
                snappingPoints={[SIZES.height + 120]}
                height={SIZES.height + 120}
                friction={0.7}
            >
                <View style={{ flex: 1, backgroundColor: "transparent" }}>
                    {/* Panel Header */}
                    <View
                        style={{
                            height: 120,
                            backgroundColor: "transparent",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={icons.up_arrow}
                            style={{ width: 16, height: 16, tintColor: COLORS.lightGray }}
                        />
                        <Text style={{ color: COLORS.lightGray, ...FONTS.h4 }}>
                            SWIPE FOR DETAILS
                        </Text>
                    </View>

                    {/* Panel Detail */}
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.white,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <MapView
                            style={{ width: "100%", height: "100%" }}
                            provider={PROVIDER_GOOGLE}
                            region={selectedPlace?.mapInitialRegion}
                            customMapStyle={MapStyle}
                        >
                            {selectedPlace?.hotels.map((hotel, index) => (
                                <Marker
                                    key={index}
                                    coordinate={hotel.latlng}
                                    identifier={hotel.id}
                                    onPress={() => setSelectedHotel(hotel)}
                                >
                                    <Image
                                        source={
                                            selectedHotel?.id === hotel.id
                                                ? icons.bed_on
                                                : icons.bed_off
                                        }
                                        resizeMode="contain"
                                        style={{ width: 50, height: 50 }}
                                    />
                                </Marker>
                            ))}
                        </MapView>

                        {/* Header */}
                        <HeaderBar
                            title={selectedPlace?.name}
                            leftOnPress={() => _panel.hide()}
                            right={true}
                            containerStyle={{
                                position: "absolute",
                                top: SIZES.padding * 2,
                            }}
                        />

                        {/* Hotel Details */}
                        {selectedHotel && (
                            <View
                                style={{
                                    position: "absolute",
                                    bottom: 30,
                                    left: 0,
                                    right: 0,
                                    padding: SIZES.radius,
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                                    Hotels in {selectedPlace?.name}
                                </Text>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginTop: SIZES.radius,
                                        padding: SIZES.radius,
                                        borderRadius: 15,
                                        backgroundColor: COLORS.transparentBlack1,
                                    }}
                                >
                                    <Image
                                        source={selectedHotel?.image}
                                        resizeMode="cover"
                                        style={{ width: 90, height: 120, borderRadius: 15 }}
                                    />

                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: SIZES.base,
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                                            {selectedHotel?.name}
                                        </Text>

                                        <Rating
                                            rate={selectedHotel?.rate}
                                            containerStyle={{ marginTop: SIZES.base }}
                                        />

                                        <View
                                            style={{
                                                flexDirection: "row",
                                                marginTop: SIZES.base,
                                            }}
                                        >
                                            <TextButton
                                                label="Details"
                                                customContainerStyle={{
                                                    marginTop: SIZES.base,
                                                    height: 45,
                                                    width: 100,
                                                }}
                                                customLabelStyle={{ ...FONTS.h3 }}
                                                onPress={() => console.log("Details")}
                                            />
                                            <View
                                                style={{
                                                    flex: 1,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: COLORS.lightGray,
                                                        ...FONTS.body4,
                                                        fontSize: Platform.OS === "ios" ? 16 : 12,
                                                    }}
                                                >
                                                    Starting from $ {selectedHotel?.price}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </SlidingUpPanel>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {renderPlace()}
            {renderMap()}
        </View>
    );
};

export default Place;
