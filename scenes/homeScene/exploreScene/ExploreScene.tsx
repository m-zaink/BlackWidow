import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/BWScene";

const ExploreScene = () => {
    return (
        <BWScene style={styles.sceneStyle}>
            <Text>ExploreScene</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ExploreScene;
