import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { removeItem, setItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function HomeScreen(props) {
    const navigation = useNavigation();

    async function onResetHandler() {
        await removeItem("onboarding");
        navigation.push("Onboarding");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <LottieView
                    source={require("../assets/animations/achieve.json")}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </View>
            <Text style={styles.text}>Merhaba!</Text>
            <TouchableOpacity style={styles.resetButton} onPress={onResetHandler}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    lottie: {
        width: width * 0.9,
        height: width,
    },
    text: {
        fontSize: width * 0.09,
        marginBottom: 24,
    },
    resetButton: {
        backgroundColor: "#34d399",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});
