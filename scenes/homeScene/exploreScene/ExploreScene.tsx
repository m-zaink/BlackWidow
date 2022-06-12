import { Text, StyleSheet } from "react-native";
import Scene from "../../core/components/Scene";

const ExploreScene = () => {
    return (
        <Scene style={styles.sceneStyle}>
            <Text>ExploreScene</Text>
        </Scene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ExploreScene;
