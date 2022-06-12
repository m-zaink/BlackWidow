import { Text, StyleSheet } from "react-native";
import Scene from "../../core/components/Scene";

const NotificationsScene = () => {
    return (
        <Scene style={styles.sceneStyle}>
            <Text>NotificationsScene</Text>
        </Scene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default NotificationsScene;
