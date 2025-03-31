import React, { Key } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

interface OptionButtonProps {
  title: string;
  colour: string;
  buttonKey?: Key | null | undefined;
  onPress: () => void;
}

const OptionButton = ({ title, colour, buttonKey, onPress }: OptionButtonProps) => {
  return (
    <TouchableOpacity
      key={buttonKey}
      style={[styles.button, { backgroundColor: colour }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: width * 0.3,
    borderWidth: 1,
    borderColor: "#A5B79F",
    marginVertical: 8,
  },
  buttonText: {
    fontFamily: "TTNorms-Medium",
    fontSize: 28,
    color: "#0B3B3C",
    textAlign: "center",
  },
});

export default OptionButton;
