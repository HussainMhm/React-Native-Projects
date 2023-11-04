import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

function Shortcut({ title, icon, onPressHandler }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View style={styles.innerContainer}>
                <Image source={icon} resizeMode="contain" style={styles.icon} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Shortcut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    text: {
        marginLeft: 6,
        color: COLORS.white,
        ...FONTS.body4,
    },
});
