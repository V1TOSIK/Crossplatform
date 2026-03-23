import {Pressable, StyleSheet, Text, View} from "react-native";
import {ROUTES} from "../../constants/routes";
import {useNavigation} from "@react-navigation/native";

export default function Footer() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <View style={styles.navigationMenu}>
                <Pressable onPress={() => navigation.navigate(ROUTES.HOME)}>
                    <Text style={styles.button}>Home</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate(ROUTES.PRODUCT)}>
                    <Text style={styles.button}>Products</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate(ROUTES.PROFILE)}>
                    <Text style={styles.button}>Profile</Text>
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