import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    Modal,
    Animated,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import data from "../data/QuizData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Quiz = () => {
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    function renderQuestion() {
        return (
            <View>
                {/* Question Counter */}
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <Text
                        style={{ color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 6 }}
                    >
                        {currentQuestionIndex + 1}
                    </Text>
                    <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
                        / {allQuestions.length}
                    </Text>
                </View>

                {/* Question */}
                <Text style={{ color: COLORS.white, fontSize: 28, marginTop: 16 }}>
                    {allQuestions[currentQuestionIndex].question}
                </Text>
            </View>
        );
    }

    function renderOptions() {
        return (
            <View style={{ marginTop: 12 }}>
                {allQuestions[currentQuestionIndex].options.map((option, index) => {
                    return (
                        <TouchableOpacity
                            key={`option-${index}`}
                            style={{
                                height: 60,
                                marginTop: 16,
                                paddingHorizontal: 16,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: COLORS.secondary + "20",
                                borderColor: COLORS.secondary + "40",
                                borderWidth: 3,
                                borderRadius: 16,
                            }}
                        >
                            <Text style={{ fontSize: 24, color: COLORS.white }}>{option}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <View
                style={{
                    flex: 1,
                    paddingVertical: 40,
                    paddingHorizontal: 16,
                    backgroundColor: COLORS.background, // why?
                    position: "relative", // why?
                }}
            >
                {/* Progress Bar */}

                {/* Question */}
                {renderQuestion()}

                {/* Options */}
                {renderOptions()}

                {/* Next Button */}

                {/* Background Image */}
                <Image
                    source={require("../assets/images/DottedBG.png")}
                    style={{
                        width: SIZES.width,
                        height: 130,
                        zIndex: -1,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.5,
                    }}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
};

export default Quiz;
