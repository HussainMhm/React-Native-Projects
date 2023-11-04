import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { SIZES, icons, FONTS, COLORS } from "../../constants";
import LineDivider from "../Home/LineDivider";

function BookCoverSection({ book }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background */}
            <ImageBackground
                source={book.bookCover}
                resizeMode="cover"
                style={styles.imageBackground}
            />

            {/* Color Overlay */}
            <View style={styles.colorOverlay(book)}></View>

            {/* Navigation header */}
            <View style={styles.navHeader}>
                {/* Left Icon */}
                <TouchableOpacity
                    style={{ marginLeft: SIZES.base }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode="contain"
                        style={styles.navIcon(book)}
                    />
                </TouchableOpacity>

                {/* Nav Title */}
                <View style={styles.navTitleContainer}>
                    <Text style={styles.navTitle(book)}>Book Detail</Text>
                </View>

                {/* Right Icon */}
                <TouchableOpacity
                    style={{ marginLeft: SIZES.base }}
                    onPress={() => console.log("More Info")}
                >
                    <Image
                        source={icons.more_icon}
                        resizeMode="contain"
                        style={styles.navIcon(book)}
                    />
                </TouchableOpacity>
            </View>

            {/* Book Cover */}
            <View style={styles.bookCoverContainer}>
                <Image source={book.bookCover} resizeMode="contain" style={styles.bookCoverImg} />
            </View>

            {/* Book Name and Author */}
            <View style={styles.bookNameContainer}>
                <Text style={styles.bookNameText(book)}>{book.bookName}</Text>
                <Text style={styles.bookAuthorText(book)}>{book.author}</Text>
            </View>

            {/* Book Info */}
            <View style={styles.bookInfoContainer}>
                <View style={styles.bookInfoItem}>
                    <Text style={styles.ratingValue}>{book.rating}</Text>
                    <Text style={styles.ratingText}>Rating</Text>
                </View>
                <View style={styles.bookInfoItem}>
                    <Text style={styles.ratingValue}>{book.pageNo}</Text>
                    <Text style={styles.ratingText}>Pages No</Text>
                </View>
                <View style={styles.bookInfoItem}>
                    <Text style={styles.ratingValue}>{book.language}</Text>
                    <Text style={styles.ratingText}>Language</Text>
                </View>
            </View>
        </View>
    );
}

export default BookCoverSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Background and Overlay
    imageBackground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    colorOverlay: (book) => ({
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: book.backgroundColor,
    }),
    // Navigation Header
    navHeader: {
        flexDirection: "row",
        paddingHorizontal: SIZES.radius,
        height: 80,
        alignItems: "flex-end",
    },
    navIcon: (book) => ({
        width: 25,
        height: 25,
        tintColor: book.navTintColor,
    }),
    navTitleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navTitle: (book) => ({
        ...FONTS.h3,
        color: book.navTintColor,
    }),
    // Book Cover
    bookCoverContainer: {
        flex: 5,
        paddingTop: SIZES.padding2,
        alignItems: "center",
    },
    bookCoverImg: {
        flex: 1,
        width: 150,
        height: "auto",
    },
    // Book Name and Author
    bookNameContainer: {
        flex: 1.8,
        alignItems: "center",
        justifyContent: "center",
    },
    bookNameText: (book) => ({
        ...FONTS.h2,
        color: book.navTintColor,
    }),
    bookAuthorText: (book) => ({
        ...FONTS.h3,
        color: book.navTintColor,
    }),
    // Book Info
    bookInfoContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        margin: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.3 )",
    },
    bookInfoItem: {
        flex: 1,
        alignItems: "center",
    },
    ratingValue: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    ratingText: {
        ...FONTS.body4,
        color: COLORS.white,
    },
});
