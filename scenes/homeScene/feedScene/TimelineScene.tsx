import { View, Text, StyleSheet } from "react-native";

const TimelineScene = () => {
    return (
        <View style={styles.sceneStyle}>
            <Text>TimelineScene</Text>
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

export default TimelineScene;
