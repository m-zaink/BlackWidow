import { StyleSheet, FlatList } from "react-native";
import { ViewableTweet } from "../../../models";
import BWColumn from "../../core/components/core/BWColumn";
import BWPartialTweet from "../../core/components/custom/BWPartialTweet";
import BWScene from "../../core/components/core/BWScene";
import BWSeparator from "../../core/components/core/BWSeparator";
import { StackScreenProps as StackSceneProps } from "@react-navigation/stack";
import { TimlineStackParameters } from "./TimelineStack";
import { useEffect, useState } from "react";
import TweetsDataSource from "../../../dataSources/tweetsDataSource/tweetsDataSource";
import { Failure, Success } from "../../../utilities/typescriptx/typescriptx";

export type TimelineSceneParameters = {
    timelineScene: undefined;
};

const TimelineScene = ({ navigation }: StackSceneProps<TimlineStackParameters>) => {
    const [tweets, setTweets] = useState(Array<ViewableTweet>());

    useEffect(() => {
        TweetsDataSource.shared.paginatedTweets().then((tweetsResult) => {
            if (tweetsResult instanceof Failure) {
                return;
            }

            if (tweetsResult instanceof Success) {
                setTweets(tweetsResult.data);
            }
        });
    }, []);

    return (
        <BWScene style={styles.sceneStyle}>
            <FlatList
                style={{ width: "100%" }}
                renderItem={({ index, item: tweet }) => {
                    return (
                        <BWColumn>
                            <BWPartialTweet
                                tweet={tweet}
                                onPressed={() => {
                                    navigation.navigate("tweetScene", { tweet: tweet });
                                }}
                                onProfileImagePressed={() => {
                                    console.log(this);
                                }}
                            />
                            {index !== tweets.length - 1 && <BWSeparator />}
                        </BWColumn>
                    );
                }}
                data={tweets}
            />
        </BWScene>
    );
};

const styles = StyleSheet.create({
    sceneStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TimelineScene;
