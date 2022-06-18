import { StackScreenProps as StackSceneProps } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/core/BWScene";

export type NotificationsSceneParameters = {
    notifications: undefined;
};

const NotificationsScene = (props: StackSceneProps<NotificationsSceneParameters>) => {
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
