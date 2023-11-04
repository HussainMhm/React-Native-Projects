import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    StatusBar,
} from "react-native";

import { images, icons, COLORS, FONTS, SIZES } from "../constants";
import { categories } from "../dummy-data/dummy";

function ScrollableTab({ tabList, selectedTab, onPress }) {
    function renderItem({ item }) {
        return (
            <TouchableOpacity
                style={{ marginHorizontal: SIZES.padding }}
                onPress={() => onPress(item)}
            >
                <Text style={styles.tabText}>{item.name}</Text>

                {selectedTab.id == item.id && (
                    <View style={{ alignItems: "center", marginTop: SIZES.base }}>
                        <View
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: COLORS.blue,
                            }}
                        ></View>
                    </View>
                )}
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

function ScrollableCard({ navigation, productList }) {
    function renderCard({ item }) {
        return (
            <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={() => navigation.navigate("ItemDetail", { itemInfo: item })}
            >
                <View style={{ width: SIZES.width / 2 }}>
                    <Image source={item.image} resizeMode="cover" style={styles.cardImage} />
                    <View style={{ position: "absolute", top: 15, left: "10%", right: "10%" }}>
                        <Text style={styles.cardCategoryText}>Furniture</Text>
                        <Text style={styles.cardCategoryTitle}>{item.productName}</Text>
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            bottom: 20,
                            left: 20,
                            borderRadius: 15,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            backgroundColor: COLORS.transparentLightGray,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>$ {item.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={(item) => item.productId}
            />
        </View>
    );
}

function Home({ navigation }) {
    const [tabList, setTabList] = useState(categories);

    const [selectedTab, setSelectedTab] = useState(tabList[0]);

    // Rendering Functions

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: "flex-start" }}
                        onPress={() => console.log("Menu Clicked")}
                    >
                        <Image source={icons.menu} resizeMode="contain" style={styles.headerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 1, alignItems: "flex-end" }}
                        onPress={() => console.log("Cart Clicked")}
                    >
                        <Image source={icons.cart} resizeMode="contain" style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderTitle(title) {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Collection Of</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    function renderPromotionCard() {
        return (
            <View style={[styles.promotionCardContainer, styles.shadow]}>
                <View style={styles.promotionImageContainer}>
                    <Image
                        source={images.sofa}
                        resizeMode="contain"
                        style={styles.promotionImage}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
                    <Text style={{ ...FONTS.body3 }}>Adding to your cart</Text>
                </View>
                <View style={styles.promotionButtonContainer}>
                    <TouchableOpacity
                        style={styles.promotionButton}
                        onPress={() => console.log("Promotion Clicked")}
                    >
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{ height: "50%", width: "50%" }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            {renderHeader()}

            {renderTitle(selectedTab.title)}

            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex: 1 }}>
                <ScrollableCard navigation={navigation} productList={selectedTab.productList} />
            </View>

            <View style={{ height: "20%", justifyContent: "flex-end", marginBottom: 20 }}>
                {renderPromotionCard()}
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 16 : 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    // Render Header
    headerIcon: {
        width: 25,
        height: 25,
    },
    // Render Title
    titleContainer: {
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
    },
    title: {
        color: COLORS.black,
        ...FONTS.largeTitle,
    },
    // Render Scrollable Tab
    tabText: {
        color: COLORS.secondary,
        ...FONTS.body2,
    },
    // Render Scrollable Card
    cardImage: {
        width: "100%",
        height: "100%",
        borderRadius: SIZES.radius * 2,
    },
    cardCategoryText: {
        color: COLORS.lightGray2,
        ...FONTS.h3,
    },
    cardCategoryTitle: {
        marginTop: SIZES.base,
        color: COLORS.white,
        ...FONTS.h2,
    },
    // Render Promotion Card
    promotionCardContainer: {
        flexDirection: "row",
        marginHorizontal: SIZES.padding,
        padding: SIZES.radius,
        height: 110,
        borderRadius: 20,
        backgroundColor: COLORS.white,
    },
    promotionImageContainer: {
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightGray2,
        borderRadius: 20,
    },
    promotionImage: {
        width: "60%",
        height: "60%",
    },
    promotionButtonContainer: {
        marginRight: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
    },
    promotionButton: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        width: 40,
        borderRadius: 10,
    },
});
