import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const BWScene = (props: { style: StyleProp<ViewStyle>; children: React.ReactNode }) => {
    return <View style={[styles.sceneStyle, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
    sceneStyle: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default BWScene;
