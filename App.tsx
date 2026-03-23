import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./src/layouts/AppLayout";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppLayout />
            </NavigationContainer>
        </AuthProvider>
    );
}