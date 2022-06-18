import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";
import { ViewableTweet } from "../../models";
import BWScene from "../core/components/core/BWScene";
import { TimlineStackParameters } from "../homeScene/feedScene/TimelineStack";

type TweetSceneProps = StackScreenProps<TimlineStackParameters>;

export type TweetSceneParameters = {
    tweet: ViewableTweet;
};

const TweetScene = (props: TweetSceneProps) => {
    return (
        <BWScene style={styles.rootStyle}>
            <Text>{props.route.params?.tweet.text ?? "Something Went Wrong!"}</Text>
        </BWScene>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TweetScene;
