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
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);

    function validateAnswer(selectedAnswer) {
        let correctAnswer = allQuestions[currentQuestionIndex].correct_option;
        setCurrentOptionSelected(selectedAnswer);
        setCorrectOption(correctAnswer);
        setIsOptionsDisabled(true);

        if (selectedAnswer == correctAnswer) {
            // Set Score
            setScore(score + 1);
        }
        // Show Next Button
        setShowNextButton(true);
    }

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
                            disabled={isOptionsDisabled}
                            style={{
                                height: 60,
                                marginTop: 16,
                                paddingHorizontal: 16,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: COLORS.secondary + "20",
                                borderColor:
                                    option == correctOption
                                        ? COLORS.success
                                        : option == currentOptionSelected
                                        ? COLORS.error
                                        : COLORS.secondary + "40",
                                borderWidth: 3,
                                borderRadius: 16,
                            }}
                            onPress={() => validateAnswer(option)}
                        >
                            <Text style={{ fontSize: 24, color: COLORS.white }}>{option}</Text>

                            {
                                // Show Check or Cross Icon based on user answer
                                option == correctOption ? (
                                    <View
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: COLORS.success,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name="check"
                                            size={24}
                                            color={COLORS.white}
                                        />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            backgroundColor: COLORS.error,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name="close"
                                            size={24}
                                            color={COLORS.white}
                                        />
                                    </View>
                                ) : null
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    function handleNextButton() {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show score modal
            setShowScoreModal(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setIsOptionsDisabled(false);
            setCorrectOption(null);
            setShowNextButton(false);
        }
    }

    function renderNextButton() {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        width: "100%",
                        backgroundColor: COLORS.accent,
                        borderRadius: 16,
                    }}
                    onPress={handleNextButton}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: COLORS.white,
                            padding: 20,
                            textAlign: "center",
                        }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    function retryQuizHandler() {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setScore(0);
        setShowNextButton(false);
    }

    function renderScoreModal() {
        return (
            <Modal animationType="slide" transparent={true} visible={showScoreModal}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            width: "90%",
                            borderRadius: 20,
                            padding: 20,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                            {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginVertical: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    color:
                                        score > allQuestions.length / 2
                                            ? COLORS.success
                                            : COLORS.error,
                                    marginRight: 5,
                                    fontWeight: "bold",
                                }}
                            >
                                {score}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: COLORS.black,
                                }}
                            >
                                / {allQuestions.length}
                            </Text>
                        </View>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                            onPress={() => retryQuizHandler()}
                            style={{
                                backgroundColor: COLORS.accent,
                                padding: 20,
                                width: "100%",
                                borderRadius: 20,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.white,
                                    fontSize: 20,
                                }}
                            >
                                Retry Quiz
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
                {renderNextButton()}

                {/* Score Modal */}
                {renderScoreModal()}
            </View>
        </SafeAreaView>
    );
};

export default Quiz;
