import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

function LineDivider(props) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}></View>
        </View>
    );
}

export default LineDivider;

const styles = StyleSheet.create({
    container: {
        width: 1,
        paddingVertical: 16,
    },
    innerContainer: {
        flex: 1,
        borderLeftColor: COLORS.lightGray,
        borderLeftWidth: 1,
    },
});
