import {useNavigation} from "@react-navigation/native";
import {Button, Pressable, Text, TextInput, View} from "react-native";
import {useState} from "react";
import { login } from "../services/auth/auth-service";
import { ROUTES } from "../constants/routes";

interface LoginFormData {
    credential: string,
    password: string,
}

export default function LoginScreen() {
    const navigation = useNavigation<any>();
    const [loginForm, setLoginForm] = useState<LoginFormData>({
        credential: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (loading) return;

        try {
            setLoading(true);

            const res = await login(loginForm.credential, loginForm.password);

            if (res.isSuccess)
                navigation.navigate(ROUTES.HOME);
            else
                console.log(res.message);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
                Login
            </Text>
            <View>
                <Text>Email</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        padding: 10,
                        marginBottom: 10
                    }}
                    value={loginForm.credential}
                    onChangeText={(text) =>
                        setLoginForm(prev => ({ ...prev, credential: text }))
                    }
                />
                <Text>Password</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        padding: 10,
                        marginBottom: 10
                    }}
                    secureTextEntry
                    value={loginForm.password}
                    onChangeText={(text) =>
                        setLoginForm(prev => ({ ...prev, password: text }))
                    }
                />

                <Button
                    title={loading ? "Loading..." : "Login"}
                    onPress={handleLogin}
                />
                <Pressable onPress={() => navigation.navigate(ROUTES.REGISTER)}>
                    <Text>Register</Text>
                </Pressable>
            </View>
        </View>
    );
}