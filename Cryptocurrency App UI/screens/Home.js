import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image,
    FlatList,
} from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";

const Home = ({ navigation }) => {
    const [trending, setTrending] = useState(dummyData.trendingCurrencies);

    function renderHeader() {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                style={{
                    width: 180,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,
                }}
            >
                {/* Currency */}
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                marginTop: 5,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.base }}>
                        <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text>
                    </View>
                </View>

                {/* Value */}
                <View style={{ marginTop: SIZES.radius }}>
                    <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
                    <Text
                        style={{
                            color: item.type == "I" ? COLORS.green : COLORS.red,
                            ...FONTS.h3,
                        }}
                    >
                        {item.changes}
                    </Text>
                </View>
            </TouchableOpacity>
        );
        return (
            <View style={{ width: "100%", height: 290, ...styles.shadow }}>
                <ImageBackground
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: "center",
                    }}
                >
                    {/* Header Bar */}
                    <View
                        style={{
                            marginTop: SIZES.padding * 2,
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: SIZES.padding,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => console.log("Notification on pressed")}
                        >
                            <Image
                                source={icons.notification_white}
                                resizeMode="contain"
                                style={{ flex: 1 }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}
                        >
                            Your Portfolio Balance
                        </Text>

                        <Text style={{ color: COLORS.white, ...FONTS.h1, marginTop: SIZES.base }}>
                            $ {dummyData.portfolio.balance}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body5,
                                marginTop: SIZES.base / 2,
                            }}
                        >
                            {dummyData.portfolio.changes} Last 24 hours
                        </Text>
                    </View>

                    {/* Trending */}
                    <View
                        style={{
                            position: "absolute",
                            bottom: "-30%",
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: SIZES.padding,
                                ...FONTS.h2,
                                color: COLORS.white,
                            }}
                        >
                            Trending
                        </Text>
                        <FlatList
                            contentContainerStyle={{ marginTop: SIZES.base }}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={(item) => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 130 }}>{renderHeader()}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
});

export default Home;
