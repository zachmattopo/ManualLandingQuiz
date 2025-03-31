import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import OptionButton from "../../components/OptionButton";
import quizData from "../../assets/json/quiz.json";
import { useState } from "react";
import { useAtom } from 'jotai';
import { hasRejectionAtom } from '../../atoms/quizState';

type Option = {
  display: string;
  value: string | boolean;
  isRejection: boolean;
};

export default function QuizQuestion() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const questionNumber = parseInt(id as string) - 1; // Convert to 0-based index
  const question = quizData.questions[questionNumber];
  const [selectedAnswer, setSelectedAnswer] = useState<Option | null>(null);
  const [hasRejection, setHasRejection] = useAtom(hasRejectionAtom);

  const handleNext = () => {
    if (selectedAnswer?.isRejection) {
      setHasRejection(true);
    } else {
      setHasRejection(false);
    }

    if (questionNumber < quizData.questions.length - 1) {
      router.push(`/(quiz)/${questionNumber + 2}`); // +2 because we need 1-based index
    } else {
      // Handle quiz completion
      router.replace("/results");
    }
  };

  const renderAnswers = () => {
    if (question.type === "ChoiceTypeImage") {
      return (
        <View style={styles.imageGrid}>
          {question.options.map((option) => (
            <TouchableOpacity
              key={option.display}
              style={[
                styles.imageContainer,
                selectedAnswer?.value === option.value && styles.selectedImageContainer,
              ]}
              onPress={() => setSelectedAnswer(option)}
            >
              <Image source={{ uri: option.display }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return (
      <View>
        {question.options.map((option) => (
          <OptionButton
            key={option.display}
            title={option.display}
            colour={selectedAnswer?.value === option.value ? "#A5B79F" : "#ECF0EB"}
            onPress={() => setSelectedAnswer(option)}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <Text style={styles.question}>{question.question}</Text>
        {renderAnswers()}
      </View>
      <View style={styles.bottomSection}>
        <CustomButton
          title="NEXT"
          colour={!selectedAnswer ? "#BFCCC8" : "#0B3B3C"}
          onPress={handleNext}
          disabled={!selectedAnswer}
        />
      </View>
    </SafeAreaView>
  );
}

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
  question: {
    fontFamily: "TTNorms-Medium",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 40,
    color: "#0B3B3C",
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
  }
});
