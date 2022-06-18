import { StyleProp, StyleSheet, ViewStyle, SafeAreaView } from "react-native";

const BWScene = (props: { style?: StyleProp<ViewStyle>; children?: React.ReactNode }) => {
    return <SafeAreaView style={[styles.sceneStyle, props.style]}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    sceneStyle: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default BWScene;
