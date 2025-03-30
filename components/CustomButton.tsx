import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

interface CustomButtonProps {
  title: string;
  colour: string;
  onPress: () => void;
}

const CustomButton = ({ title, colour, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colour }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.3,
  },
  buttonText: {
    fontFamily: "TTNorms-Regular",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default CustomButton;
