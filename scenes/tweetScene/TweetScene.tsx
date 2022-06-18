import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";
import { ViewableTweet } from "../../models";
import BWScene from "../core/components/core/BWScene";
import { TimlineStackParameters } from "../HomeScene/TimelineScene/TimelineStack";

export type TweetSceneStackParameters = {
    tweetScene: {
        tweet: ViewableTweet;
    };
};

const TweetScene = ({ route }: StackScreenProps<TweetSceneStackParameters>) => {
    return (
        <BWScene style={styles.rootStyle}>
            <Text>{route.params?.tweet.text}</Text>
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
