import { Text, StyleSheet } from "react-native";
import Scene from "../../core/components/Scene";

const SelfScene = () => {
    return (
        <Scene style={styles.sceneStyle}>
            <Text>SelfScene</Text>
        </Scene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SelfScene;
