import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";
import learnMoreData from "../assets/json/learn-more.json";

const { height } = Dimensions.get("window");

// Add a helper function to get the image based on assetID
const getImageSource = (assetID: string) => {
  const images: { [key: string]: any } = {
    "hairLossInfoIllustration": require("../assets/images/hair-loss-info-illustration.png"),
    "erectileDysfunctionInfoIllustration": require("../assets/images/erectile-dysfunction-info-illustration.png"),
  };
  return images[assetID];
};

const InfoScreen = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = learnMoreData.data[currentIndex];

  const handleNext = () => {
    if (currentIndex < learnMoreData.data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: height * 0.1 }} />
      <View style={styles.imageContainer}>
        <Text style={[
          styles.number, 
          currentIndex === 1 && styles.numberSecondSlide
        ]}>
          {String(currentIndex + 1).padStart(2, '0')}
        </Text>
        <Image
          style={[
            styles.image,
            currentIndex === 1 && styles.imageSecondSlide
          ]}
          source={getImageSource(currentItem.assetID)}
        />
      </View>
      <View style={{ height: height * 0.08 }} />
      <Text style={styles.header}>{currentItem.header}</Text>
      <Text style={styles.title}>{currentItem.title}</Text>
      <Text style={styles.subtitle}>{currentItem.subtitle}</Text>
      <View style={{ height: height * 0.05 }} />
      <View style={styles.pagination}>
        {learnMoreData.data.map((_, index) => (
          <View
            key={index}
            style={index === currentIndex ? styles.dotActive : styles.dot}
          />
        ))}
      </View>
      <CustomButton
        title={currentIndex === learnMoreData.data.length - 1 ? "DONE" : "NEXT"}
        colour="#0B3B3C"
        onPress={handleNext}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ECF0EB",
  },
  imageContainer: {
    position: "relative",
    width: '100%',
  },
  image: {
    width: 175,
    height: 200,
    borderRadius: 12,
    zIndex: 1,
    alignSelf: 'flex-start',
  },
  imageSecondSlide: {
    alignSelf: 'flex-end',
  },
  number: {
    fontFamily: "TTNorms-Medium",
    fontSize: 180,
    color: "#FFFFFF",
    position: "absolute",
    right: 0,
    zIndex: 0,
  },
  numberSecondSlide: {
    right: 'auto',
    left: 0,
  },
  header: {
    fontFamily: "TTNorms-Bold",
    fontWeight: "700",
    fontSize: 12,
    color: "#6D8A83",
    marginVertical: 10,
  },
  title: {
    fontFamily: "TTNorms-Medium",
    fontSize: 28,
    fontWeight: "500",
    color: "#0B3B3C",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "TTNorms-Regular",
    fontSize: 19,
    fontWeight: "300",
    color: "#0B3B3C",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
    marginHorizontal: 4,
  },
});

export default InfoScreen;
