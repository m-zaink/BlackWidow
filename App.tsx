import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScene from "./scenes/HomeScene/HomeScene";

const App = () => {
    return (
        <NavigationContainer>
            <HomeScene />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
