import { View, Text, StyleSheet } from "react-native";

const NotificationsScene = () => {
    return (
        <View style={styles.sceneStyle}>
            <Text>NotificationsScene</Text>
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

export default NotificationsScene;
