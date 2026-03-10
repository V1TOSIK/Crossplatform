import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";

export default function ProductScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
                Product Screen
            </Text>
        </View>
    );
}