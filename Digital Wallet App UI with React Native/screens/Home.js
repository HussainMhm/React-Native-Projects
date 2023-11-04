import { View, Text, StyleSheet, FlatList, Image, Platform } from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { featuresData, specialPromoData } from "../dummy/dummy-data";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home(props) {
    const [features, setFeatures] = useState(featuresData);
    const [specialPromos, setSpecialPromos] = useState(specialPromoData);

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    marginVertical: SIZES.padding * 2,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h1 }}>Hello!</Text>
                    <Text style={{ ...FONTS.body2 }}>Hussain Abdullatif</Text>
                </View>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: COLORS.lightGray,
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{ width: 20, height: 20, tintColor: COLORS.secondary }}
                        />
                        <View
                            style={{
                                position: "absolute",
                                top: Platform.OS == "ios" ? -5 : 0,
                                right: Platform.OS == "ios" ? -5 : 0,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5,
                            }}
                        ></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                    }}
                />
            </View>
        );
    }

    function renderFeatures() {
        function Header() {
            return (
                <View style={{ marginBottom: SIZES.padding * 2 }}>
                    <Text style={{ ...FONTS.h3 }}>Features</Text>
                </View>
            );
        }

        function renderItem({ item }) {
            return (
                <TouchableOpacity
                    style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: "center" }}
                    onPress={() => console.log(item.description)}
                >
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            marginBottom: 5,
                            borderRadius: 20,
                            backgroundColor: item.backgroundColor,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: item.color,
                            }}
                        />
                    </View>
                    <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body4 }}>
                        {item.description}
                    </Text>
                </TouchableOpacity>
            );
        }

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        );
    }

    function renderPromos() {
        function HeaderComponent() {
            return (
                <View>
                    {renderHeader()}
                    {renderBanner()}
                    {renderFeatures()}
                    {renderPromoHeader()}
                </View>
            );
        }

        function renderPromoHeader() {
            return (
                <View
                    style={{
                        flexDirection: "row",
                        marginBottom: SIZES.padding,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
                    </View>
                    <TouchableOpacity onPress={() => console.log("View All")}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        function renderItem({ item }) {
            return (
                <TouchableOpacity
                    style={{ marginVertical: SIZES.base, width: SIZES.width / 2.5 }}
                    onPress={() => console.log(item.title)}
                >
                    <View
                        style={{
                            height: 80,
                            borderRadius: 10,
                            backgroundColor: COLORS.primary,
                        }}
                    >
                        <Image
                            source={images.promoBanner}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 10,
                            }}
                        />
                    </View>

                    <View
                        style={{
                            paddingVertical: SIZES.padding,
                            backgroundColor: COLORS.lightGray,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, fontSize: 16 }}>{item.title}</Text>
                        <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={specialPromos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.white, paddingBottom: SIZES.padding * 8 }}
        >
            {renderPromos()}
        </SafeAreaView>
    );
}

export default Home;
