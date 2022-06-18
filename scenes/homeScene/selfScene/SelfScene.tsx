import { StackScreenProps as StackSceneProps } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/core/BWScene";

export type SelfSceneParameters = {
    selfScene: undefined;
};

const SelfScene = (props: StackSceneProps<SelfSceneParameters>) => {
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
