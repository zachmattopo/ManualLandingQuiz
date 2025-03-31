import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="InfoScreen"
          options={{
            headerShown: true,
            presentation: "modal",
            header() {
              return (
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => router.back()}
                  >
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                  <Text style={styles.header}>What can we help with</Text>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="(quiz)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="results"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#ECF0EB",
            },
            headerTitleStyle: {
              fontFamily: "TTNorms-Regular",
              fontWeight: "400",
              fontSize: 22,
            },
            headerTitle: "Quiz",
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECF0EB",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
    flexDirection: "row",
    position: "relative",
  },
  header: {
    fontFamily: "TTNorms-Medium",
    color: "#0B3B3C",
    fontSize: 20,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    left: 20,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#0B3B3C",
  },
});
