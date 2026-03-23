import {useNavigation} from "@react-navigation/native";
import {Button, Pressable, Text, TextInput, View} from "react-native";
import {useState} from "react";
import { register } from "../services/auth/auth-service";
import { ROUTES } from "../constants/routes";
import {useAuth} from "../context/AuthContext";

interface RegisterFormData {
    credential: string,
    password: string,
    password_confirmation: string
}

export default function RegisterScreen() {
    const navigation = useNavigation<any>();
    const [registerForm, setRegisterForm] = useState<RegisterFormData>({
        credential: "",
        password: "",
        password_confirmation: "",
    });
    const { login: setAuthLogin } = useAuth();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        if (loading) return;

        try {
            setLoading(true);

            if (!registerForm.credential || !registerForm.password || !registerForm.password_confirmation) {
                setErrorMessage("All fields are required");
                return;
            }

            if (registerForm.password !== registerForm.password_confirmation) {
                setErrorMessage("Passwords do not match");
                return;
            }

            const res = await register(registerForm.credential, registerForm.password);

            if (res.isSuccess == true){
                setAuthLogin(res.value);
                navigation.navigate(ROUTES.HOME)
            }
            else
                setErrorMessage(res.message);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
                Register
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
                    value={registerForm.credential}
                    onChangeText={(text) =>
                        setRegisterForm(prev => ({ ...prev, credential: text }))
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
                    value={registerForm.password}
                    onChangeText={(text) =>
                        setRegisterForm(prev => ({ ...prev, password: text }))
                    }
                />

                <Text>Confirm Password</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        padding: 10,
                        marginBottom: 10
                    }}
                    secureTextEntry
                    value={registerForm.password_confirmation}
                    onChangeText={(text) =>
                        setRegisterForm(prev => ({ ...prev, password_confirmation: text }))
                    }
                />

                <Text style={{
                    color: "#c20d00",
                }}>{errorMessage}</Text>

                <Button
                    title={loading ? "Loading..." : "Register"}
                    onPress={handleRegister}
                />
                <Text>
                    Already has Account?
                    <Pressable onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                        <Text>Login</Text>
                    </Pressable>
                </Text>
            </View>
        </View>
    );
}