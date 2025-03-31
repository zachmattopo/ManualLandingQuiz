import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAtomValue } from "jotai";
import { hasRejectionAtom } from "../atoms/quizState";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

export default function Results() {
  const hasRejection = useAtomValue(hasRejectionAtom);
  const router = useRouter();

  const handleUrlPress = async () => {
    const url = 'https://www.manual.co';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  const successMessage = (
    <Text style={styles.message}>
      Great news! We have the perfect treatment for your hair loss. Proceed to{' '}
      <Text style={styles.link} onPress={handleUrlPress}>
        www.manual.co
      </Text>
      , and prepare to say hello to your new hair!
    </Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        {hasRejection ? (
          <Text style={styles.message}>
            Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.
          </Text>
        ) : (
          successMessage
        )}
      </View>
      <View style={styles.bottomSection}>
        <CustomButton
          title="OK"
          colour="#0B3B3C"
          onPress={() => router.replace("/")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0EB",
    paddingHorizontal: 18,
  },
  topSection: {
    flex: 4,
    justifyContent: "center",
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    fontFamily: "TTNorms-Regular",
    fontSize: 28,
    fontWeight: "500",
    color: "#0B3B3C",
    textAlign: "left",
    marginBottom: 40,
  },
  link: {
    color: '#A5B79F',
  },
});
