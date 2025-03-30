import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";

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
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/manual-logo.png")} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.title}>Be good to yourself</Text>
        <Text style={styles.subtitle}>
          We're working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </Text>
      </View>
      <View style={styles.bottomSection}>
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
        <CustomButton
          title="TAKE THE QUIZ"
          colour="#7E0707"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5B79F",
  },
  topSection: {
    flex: 0.75,
    justifyContent: "flex-end",
  },
  middleSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "TTNorms-Medium",
    fontSize: 60,
    color: "#0B3B3C",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: "TTNorms-Regular",
    fontSize: 19,
    color: "#0B3B3C",
    textAlign: "center",
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
