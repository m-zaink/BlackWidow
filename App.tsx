import { StyleSheet, Text, View } from "react-native";

const App = () => {
    return (
        <View style={styles.rootStyle}>
            <Text>Black Widow</Text>
        </View>
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
