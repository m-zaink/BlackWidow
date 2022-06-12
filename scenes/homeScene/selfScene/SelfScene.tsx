import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/BWScene";

const SelfScene = () => {
    return (
        <BWScene style={styles.sceneStyle}>
            <Text>SelfScene</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SelfScene;
