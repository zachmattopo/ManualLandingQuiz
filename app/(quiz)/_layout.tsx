import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function QuizLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTintColor: "#0B3B3C",
        headerShadowVisible: false,
        headerTransparent: true,
        headerTitle: "Quiz",
        headerTitleStyle: {
          fontFamily: "TTNorms-Regular",
          fontWeight: "400",
          fontSize: 22,
        },
        headerBackButtonDisplayMode: "minimal",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="#0B3B3C" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
