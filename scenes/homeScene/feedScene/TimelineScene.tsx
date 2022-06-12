import { Text, StyleSheet } from "react-native";
import Scene from "../../core/components/Scene";

const TimelineScene = () => {
    return (
        <Scene style={styles.sceneStyle}>
            <Text>TimelineScene</Text>
        </Scene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TimelineScene;
