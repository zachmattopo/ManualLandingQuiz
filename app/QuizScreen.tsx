import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import quizData from "../assets/json/quiz.json";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import OptionButton from "@/components/OptionButton";

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(null);
    }
  };

  const renderAnswers = () => {
    if (currentQuestion.type === "ChoiceTypeImage") {
      return (
        <View style={styles.imageGrid}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.imageContainer,
                selectedIndex === index && styles.selectedImageContainer,
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Image source={{ uri: option.display }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      // Assuming the other type is "ChoiceTypeText"
      return (
        <View>
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              title={option.display}
              colour={selectedIndex === index ? "#A5B79F" : "#ECF0EB"}
              onPress={() => setSelectedIndex(index)}
            />
          ))}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        {renderAnswers()}
      </View>
      <View style={styles.bottomSection}>
        <CustomButton
          title="NEXT"
          colour={selectedIndex === null ? "#BFCCC8" : "#0B3B3C"}
          onPress={handleNext}
          disabled={selectedIndex === null}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ECF0EB",
  },
  topSection: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 24,
    color: "#173F42",
  },
  question: {
    fontFamily: "TTNorms-Medium",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 40,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  imageContainer: {
    margin: 10,
    borderRadius: 20,
  },
  selectedImageContainer: {
    backgroundColor: "#A5B79F",
  },
  image: {
    width: 100,
    height: 100,
  },
  textOption: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: "80%",
    alignSelf: "center",
  },
  selectedTextOption: {
    backgroundColor: "#9AA5A9",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default QuizScreen;
