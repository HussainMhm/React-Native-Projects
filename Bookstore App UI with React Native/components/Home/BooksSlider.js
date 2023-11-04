import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

function BooksSlider({ data }) {
    const navigation = useNavigation();

    function renderItemFunction({ item, index }) {
        return (
            <TouchableOpacity
                style={[styles.renderedItem, { marginLeft: index == 0 ? SIZES.padding : 0 }]}
                onPress={() =>
                    navigation.navigate("BookDetail", {
                        book: item,
                    })
                }
            >
                {/* Book Cover */}
                <Image source={item.bookCover} resizeMode="cover" style={styles.coverImage} />

                {/* Book Info */}
                <View style={styles.bookInfoContainer}>
                    <Image source={icons.clock_icon} style={styles.bookInfoIcon} />
                    <Text style={styles.bookInfoText}>{item.lastRead}</Text>
                    <Image
                        source={icons.page_icon}
                        style={[styles.bookInfoIcon, { marginLeft: SIZES.radius }]}
                    />
                    <Text style={styles.bookInfoText}>{item.completion}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItemFunction}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default BooksSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    renderedItem: {
        flex: 1,
        marginRight: 16,
    },
    coverImage: {
        width: 180,
        height: 250,
        borderRadius: 20,
    },
    bookInfoContainer: {
        marginTop: SIZES.radius,
        flexDirection: "row",
        alignItems: "center",
    },
    bookInfoIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightGray,
    },
    bookInfoText: {
        marginLeft: 5,
        ...FONTS.body3,
        color: COLORS.lightGray,
    },
});
