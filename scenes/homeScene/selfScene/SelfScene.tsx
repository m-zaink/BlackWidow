import { View, Text, StyleSheet } from "react-native";

const SelfScene = () => {
    return (
        <View style={styles.sceneStyle}>
            <Text>SelfScene</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SelfScene;
