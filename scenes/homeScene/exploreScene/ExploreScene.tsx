import { StackScreenProps as StackSceneProps } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";
import BWScene from "../../core/components/core/BWScene";

export type ExploreSceneParameters = {
    exploreScene: undefined;
};

const ExploreScene = (props: StackSceneProps<ExploreSceneParameters>) => {
    return (
        <BWScene style={styles.sceneStyle}>
            <Text>ExploreScene</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ExploreScene;
