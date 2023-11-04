import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import Shortcut from "./Shortcut";
import LineDivider from "./LineDivider";

function ShortcutsSection(props) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {/* Claim */}
                <Shortcut title="Claim" icon={icons.claim_icon} />

                {/* Divider */}
                <LineDivider />

                {/* Get Point */}
                <Shortcut title="Get Point" icon={icons.point_icon} />

                {/* Divider */}
                <LineDivider />

                {/* My Card */}
                <Shortcut title="My Card" icon={icons.card_icon} />
            </View>
        </View>
    );
}

export default ShortcutsSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: SIZES.padding,
        paddingHorizontal: SIZES.base,
    },
    innerContainer: {
        flexDirection: "row",
        height: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.radius,
    },
});
