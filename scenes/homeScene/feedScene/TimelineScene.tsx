import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/BWScene";

const TimelineScene = () => {
    return (
        <BWScene style={styles.sceneStyle}>
            <Text>TimelineScene</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TimelineScene;
