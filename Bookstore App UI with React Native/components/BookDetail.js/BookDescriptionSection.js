import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { useState } from "react";

function BookDescriptionSection({ book }) {
    const [scrollViewFullHeight, setScrollViewFullHeight] = useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

    const indicator = new Animated.Value(0);

    const indicatorSize =
        scrollViewFullHeight > scrollViewVisibleHeight
            ? (scrollViewVisibleHeight * scrollViewVisibleHeight) / scrollViewFullHeight
            : scrollViewVisibleHeight;

    const difference =
        scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;

    return (
        <View style={styles.outerContainer}>
            {/* Custom Scrollbar */}
            <View style={styles.customScrollBar}>
                <Animated.View
                    style={{
                        width: 4,
                        height: indicatorSize,
                        backgroundColor: COLORS.lightGray4,
                        transform: [
                            {
                                translateY: Animated.multiply(
                                    indicator,
                                    scrollViewVisibleHeight / scrollViewFullHeight
                                ).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    }}
                />
            </View>

            {/* Description */}
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16} // ?
                onContentSizeChange={(width, height) => {
                    setScrollViewFullHeight(height);
                }}
                onLayout={({
                    nativeEvent: {
                        layout: { x, y, width, height },
                    },
                }) => {
                    setScrollViewVisibleHeight(height);
                }}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: indicator } } }], {
                    useNativeDriver: false,
                })}
            >
                <Text style={styles.title}>Description</Text>
                <Text style={styles.description}>{book.description}</Text>
            </ScrollView>
        </View>
    );
}

export default BookDescriptionSection;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: "row",
        padding: SIZES.padding,
    },
    container: {
        paddingLeft: SIZES.padding2,
    },
    title: {
        ...FONTS.h2,
        color: COLORS.white,
        marginBottom: SIZES.padding,
    },
    description: {
        ...FONTS.body2,
        color: COLORS.lightGray,
    },
    customScrollBar: {
        width: 4,
        height: "100%",
        backgroundColor: COLORS.gray1,
    },
});
