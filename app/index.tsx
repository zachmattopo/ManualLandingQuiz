import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";

const { height, width } = Dimensions.get("window");

const MyApp = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/manual-logo.png")} />
      </View>
      <Text style={styles.title}>Be good to yourself</Text>
      <Text style={styles.subtitle}>
        We’re working around the clock to bring you a holistic approach to your
        wellness. From top to bottom, inside and out.
      </Text>
      <View style={{ height: height * 0.1 }} />
      <TouchableOpacity
        style={styles.learnMoreButton}
        onPress={() =>
          router.push({
            pathname: "/InfoScreen",
            params: {
              presentation: "modal",
            },
          })
        }
      >
        <Text style={styles.learnMoreText}>LEARN MORE</Text>
      </TouchableOpacity>
      <CustomButton title="TAKE THE QUIZ" colour="#7E0707" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5B79F",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.02, // Responsive margin
  },
  logo: {
    fontSize: height * 0.1, // Responsive font size
    color: "#0B3B3C",
  },
  title: {
    fontFamily: "TTNorms-Medium",
    fontSize: 70,
    color: "#0B3B3C",
    textAlign: "center",
    marginVertical: height * 0.02, // Responsive margin
  },
  subtitle: {
    fontFamily: "TTNorms-Regular",
    fontSize: 19,
    color: "#0B3B3C",
    textAlign: "center",
    marginBottom: height * 0.05, // Responsive margin
    paddingHorizontal: width * 0.1, // Responsive padding
  },
  learnMoreButton: {
    marginBottom: 20,
  },
  learnMoreText: {
    fontFamily: "TTNorms-Regular",
    fontSize: 16,
    color: "#0B3B3C",
    textDecorationLine: "underline",
  },
});

export default MyApp;
