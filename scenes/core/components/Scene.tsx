import { StyleSheet, View, ViewStyle } from "react-native";

const Scene = (props: { style: ViewStyle; children: React.ReactNode }) => {
    return <View style={[styles.sceneStyle, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
    sceneStyle: {
        flex: 1,
    },
});

export default Scene;
