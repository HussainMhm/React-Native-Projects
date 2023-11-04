import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";

import { COLORS, SIZES, icons, FONTS } from "../constants";

function ItemDetail({ route, navigation }) {
    function renderHeader() {
        return (
            <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: "flex-start" }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={icons.menu} resizeMode="contain" style={styles.headerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flex: 1, alignItems: "flex-end" }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={styles.headerIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderInfo() {
        let { itemInfo } = route.params;

        if (itemInfo) {
            return (
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                >
                    {renderHeader()}

                    {/* Product Tag */}
                    <View style={styles.tagContainer}>
                        <View style={styles.tagDot}></View>
                    </View>

                    <View style={styles.tagLabelContainer}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.tagLabel}>{itemInfo.productName}</Text>
                        </View>
                        <View
                            style={{
                                flex: 1.5,
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text style={styles.tagPrice}>$ {itemInfo.price.toFixed(2)}</Text>
                        </View>
                    </View>

                    <View style={styles.itemTitleContainer}>
                        <Text style={styles.itemCategoryText}>Furniture</Text>
                        <Text style={styles.itemTitleText}>{itemInfo.productName}</Text>
                    </View>
                </ImageBackground>
            );
        } else {
            <View></View>;
        }
    }

    function renderFooter() {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.footerNavIconContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.dashboard} style={styles.footerNavIcon} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.footerCenterNavIconContainer}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={icons.plus} style={styles.footerCenterNavIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footerNavIconContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.user} style={styles.footerNavIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View>
            {renderInfo()}
            {renderFooter()}
        </View>
    );
}

export default ItemDetail;

const styles = StyleSheet.create({
    // Render Header
    headerIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.white,
    },
    // Render Info
    tagContainer: {
        position: "absolute",
        top: "45%",
        left: "15%",
        borderRadius: 80,
        backgroundColor: COLORS.transparentLightGray1,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    tagDot: {
        borderRadius: 20,
        backgroundColor: COLORS.blue,
        height: 10,
        width: 10,
    },
    tagLabelContainer: {
        position: "absolute",
        top: "43%",
        left: "30%",
        flexDirection: "row",
        padding: SIZES.radius * 1.5,
        backgroundColor: COLORS.transparentLightGray1,
        width: "60%",
        borderRadius: 10,
    },
    taglabel: {
        color: COLORS.darkGray,
        ...FONTS.h3,
    },
    tagPrice: {
        color: COLORS.darkGreen,
        ...FONTS.h3,
    },
    itemTitleContainer: {
        position: "absolute",
        bottom: "20%",
        left: SIZES.padding,
        right: SIZES.padding,
    },
    itemCategoryText: {
        color: COLORS.lightGray2,
        ...FONTS.body2,
    },
    itemTitleText: {
        marginTop: SIZES.radius,
        color: COLORS.white,
        ...FONTS.h1,
    },
    // Render Footer
    footerContainer: {
        position: "absolute",
        bottom: "5%",
        left: SIZES.padding,
        right: SIZES.padding,
        flexDirection: "row",
        height: 70,
        backgroundColor: COLORS.white,
        borderRadius: 35,
    },
    footerNavIconContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    footerNavIcon: {
        tintColor: COLORS.gray,
        width: 25,
        height: 25,
    },
    footerCenterNavIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    footerCenterNavIcon: {
        tintColor: COLORS.white,
        height: 20,
        width: 20,
    },
});
