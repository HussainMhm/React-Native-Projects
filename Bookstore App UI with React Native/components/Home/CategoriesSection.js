import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

function CategoriesSection({ categories, books }) {
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState(1);
    var books = [];

    let selectedCategoryBooks = categories.filter((a) => a.id == selectedCategory);

    if (selectedCategoryBooks.length > 0) {
        books = selectedCategoryBooks[0].books;
    }

    function renderItemFunction({ item }) {
        return (
            <TouchableOpacity
                style={styles.renderedItem}
                onPress={() => setSelectedCategory(item.id)}
            >
                {selectedCategory == item.id && (
                    <Text style={{ ...FONTS.h2, color: COLORS.white, paddingVertical: 4 }}>
                        {item.categoryName}
                    </Text>
                )}

                {selectedCategory != item.id && (
                    <Text style={{ ...FONTS.h2, color: COLORS.lightGray, paddingVertical: 4 }}>
                        {item.categoryName}
                    </Text>
                )}
            </TouchableOpacity>
        );
    }

    function renderBookItems({ item }) {
        return (
            <View style={styles.renderedBookItemContainer}>
                <TouchableOpacity
                    style={styles.renderedBookItemInnerContainer}
                    onPress={() => navigation.navigate("BookDetail", { book: item })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={styles.renderedBookItemImage}
                    />

                    <View style={styles.renderedBookItemInfoContainer}>
                        {/* Book Name and Author */}
                        <Text style={styles.renderedBookItemTitle}>{item.bookName}</Text>
                        <Text style={styles.renderedBookItemAuthor}>{item.author}</Text>

                        {/* Book Info */}
                        <View style={styles.renderedBookItemDetails}>
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={styles.renderedBookItemIcon}
                            />
                            <Text style={styles.renderedBookItemIconText}>{item.pageNo}</Text>

                            <Image
                                source={icons.read_icon}
                                resizeMode="contain"
                                style={styles.renderedBookItemIcon}
                            />
                            <Text style={styles.renderedBookItemIconText}>{item.readed}</Text>
                        </View>

                        {/* Genres */}
                        <View style={styles.renderedBookItemGenreContainer}>
                            {item.genre.includes("Drama") && (
                                <View
                                    style={[
                                        styles.renderedBookGenreItem,
                                        { backgroundColor: COLORS.darkBlue },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.renderedBookGenreItemText,
                                            { color: COLORS.lightBlue },
                                        ]}
                                    >
                                        Drama
                                    </Text>
                                </View>
                            )}
                            {item.genre.includes("Romance") && (
                                <View
                                    style={[
                                        styles.renderedBookGenreItem,
                                        { backgroundColor: COLORS.darkRed },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.renderedBookGenreItemText,
                                            { color: COLORS.lightRed },
                                        ]}
                                    >
                                        Romance
                                    </Text>
                                </View>
                            )}
                            {item.genre.includes("Adventure") && (
                                <View style={styles.renderedBookGenreItem}>
                                    <Text style={styles.renderedBookGenreItemText}>Adventure</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <FlatList
                    data={categories}
                    renderItem={renderItemFunction}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={[styles.innerContainer, { marginTop: SIZES.radius }]}>
                <FlatList
                    data={books}
                    renderItem={renderBookItems}
                    keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default CategoriesSection;

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
    },
    innerContainer: {
        flex: 1,
        paddingLeft: SIZES.padding,
    },
    renderedItem: {
        flex: 1,
        marginRight: SIZES.padding,
    },
    renderedBookItemContainer: {
        marginVertical: SIZES.base,
    },
    renderedBookItemInnerContainer: {
        flex: 1,
        flexDirection: "row",
    },
    renderedBookItemImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    renderedBookItemInfoContainer: {
        flex: 1,
        marginLeft: SIZES.radius,
    },
    renderedBookItemTitle: {
        paddingRight: SIZES.padding,
        ...FONTS.h2,
        color: COLORS.white,
    },
    renderedBookItemAuthor: {
        ...FONTS.h3,
        color: COLORS.lightGray,
    },
    renderedBookItemDetails: {
        flexDirection: "row",
        marginTop: SIZES.radius,
    },
    renderedBookItemIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightGray,
    },
    renderedBookItemIconText: {
        ...FONTS.body4,
        color: COLORS.lightGray,
        paddingHorizontal: SIZES.radius,
    },
    renderedBookItemGenreContainer: {
        flexDirection: "row",
        marginTop: SIZES.base,
    },
    renderedBookGenreItem: {
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.base,
        marginRight: SIZES.base,
        backgroundColor: COLORS.darkGreen,
        height: 40,
        borderRadius: SIZES.radius,
    },
    renderedBookGenreItemText: {
        ...FONTS.body3,
        color: COLORS.lightGreen,
    },
});
