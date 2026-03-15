// header.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ROUTES } from "../../constants/routes";
import {useNavigation} from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text style={styles.button}>LOGO</Text>
            </Pressable>
            <View style={styles.navigationMenu}>

                <Pressable onPress={() => navigation.navigate(ROUTES.PROFILE)}>
                    <Text style={styles.button}>Profile</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                    <Text style={styles.button}>Login</Text>
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