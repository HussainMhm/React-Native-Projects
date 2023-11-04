import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

function BookButtonsSection(props) {
    return (
        <View style={styles.container}>
            {/* Bookmark Icon */}
            <TouchableOpacity
                style={styles.bookmarkIconContainer}
                onPress={() => console.log("Bookmarked")}
            >
                <Image
                    source={icons.bookmark_icon}
                    resizeMode="contain"
                    style={styles.bookmarkIcon}
                />
            </TouchableOpacity>

            {/* Start Reading Button */}
            <TouchableOpacity
                style={styles.readButtonContainer}
                onPress={() => console.log("Start Reading")}
            >
                <Text style={styles.readButtonText}>Start Reading</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BookButtonsSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    bookmarkIconContainer: {
        width: 60,
        backgroundColor: COLORS.secondary,
        marginLeft: SIZES.padding,
        marginVertical: SIZES.base,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center",
    },
    bookmarkIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.lightGray2,
    },
    readButtonContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        marginHorizontal: SIZES.base,
        marginVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
    },
    readButtonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
});
