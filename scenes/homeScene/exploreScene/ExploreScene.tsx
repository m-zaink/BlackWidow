import { View, Text, StyleSheet } from "react-native";

const ExploreScene = () => {
    return (
        <View style={styles.sceneStyle}>
            <Text>ExploreScene</Text>
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

export default ExploreScene;
