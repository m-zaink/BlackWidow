import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/BWScene";

const NotificationsScene = () => {
    return (
        <BWScene style={styles.sceneStyle}>
            <Text>NotificationsScene</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default NotificationsScene;
