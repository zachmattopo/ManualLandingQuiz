import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="InfoScreen"
          options={{
            headerShown: true,
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
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
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
