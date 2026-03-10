// Header.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import { MainStackParamList } from "../navigation/MainStackParamList";

export default function Header({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
        <View style={styles.navigationMenu}>
            <Pressable onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text style={styles.button}>Home</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate(ROUTES.TASKS)}>
                <Text style={styles.button}>Tasks</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    height: 60, 
    backgroundColor: "#222", 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16 
  },
  navigationMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: { 
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20 
  },
});