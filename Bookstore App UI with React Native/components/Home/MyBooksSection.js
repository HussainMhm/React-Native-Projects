import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES, FONTS, COLORS } from "../../constants";
import BooksSlider from "./BooksSlider";

function MyBooksSection({ books }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>My Book</Text>

                <TouchableOpacity onPress={() => console.log("See more")}>
                    <Text style={styles.button}>see more</Text>
                </TouchableOpacity>
            </View>

            {/* Books */}
            <BooksSlider data={books} />
        </View>
    );
}

export default MyBooksSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        ...FONTS.h2,
        color: COLORS.white,
    },
    button: {
        ...FONTS.body3,
        color: COLORS.lightGray,
        alignSelf: "flex-start",
        textDecorationLine: "underline",
        marginTop: 5,
    },
});
