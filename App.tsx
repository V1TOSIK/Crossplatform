import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./src/layouts/AppLayout";

export default function App() {
    return (
        <NavigationContainer>
            <AppLayout />
        </NavigationContainer>
    );
}