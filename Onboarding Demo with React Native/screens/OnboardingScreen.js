import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

function OnboardingScreen(props) {
    const navigation = useNavigation();

    function handleDone() {
        navigation.navigate("Home");
        setItem("onboarded", "1");
    }

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                containerStyles={{ paddingHorizontal: 16 }}
                pages={[
                    {
                        backgroundColor: "#a7f3d0",
                        image: (
                            <View>
                                <LottieView
                                    source={require("../assets/animations/horror1.json")}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: "Boost Productivity",
                        subtitle: "Subscribe this channel to boost your productivity level",
                    },
                    {
                        backgroundColor: "#fef3c7",
                        image: (
                            <View>
                                <LottieView
                                    source={require("../assets/animations/horror2.json")}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: "Work Seamlessly",
                        subtitle: "Get your work done seamlessly without interruption",
                    },
                    {
                        backgroundColor: "#a78bfa",
                        image: (
                            <View>
                                <LottieView
                                    source={require("../assets/animations/horror4.json")}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: "Achieve Higher Goals",
                        subtitle:
                            "By boosting your productivity we help you to achieve higher goals",
                    },
                ]}
            />
        </View>
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "skyblue",
    },
    lottie: {
        width: width * 0.9,
        height: width,
    },
});
