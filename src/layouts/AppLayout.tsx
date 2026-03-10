import { View, StyleSheet } from "react-native";
import MainStackNavigator from "../navigation/MainStackNavigator";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function AppLayout() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <MainStackNavigator />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});