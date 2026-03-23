// header.tsx
import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { ROUTES } from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../../context/AuthContext';


export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <View style={styles.navigationMenu}>

                <View style={{ flexDirection: 'row' }}>
                    {isLoggedIn ? (
                        <Button title="Logout" onPress={logout} />
                    ) : (
                        <>
                            <Button title="Login" onPress={() => navigation.navigate(ROUTES.LOGIN)} />
                            <Button title="Register" onPress={() => navigation.navigate(ROUTES.REGISTER)} />
                        </>
                    )}
                </View>
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
    }
})