import { Text, StyleSheet, FlatList, View } from "react-native";
import { ViewableTweet } from "../../../models";
import BWColumn from "../../core/components/BWColumn";
import BWPartialTweet from "../../core/components/BWPartialTweet";
import BWScene from "../../core/components/BWScene";
import BWSeparator from "../../core/components/BWSeparator";
import { scaledSize } from "../../core/dimensions";

const TimelineScene = () => {
    const tweets: ViewableTweet[] = [
        {
            id: "Wonderful",
            text: "Wonderful",
            authorId: "",
            creationDate: "26 Jun",
            externalId: "",
            interactionDetails: {
                commentsCount: 0,
                likesCount: 0,
            },
            lastUpdatedDate: "26 Jun",
            viewables: {
                liked: true,
                bookmarked: true,
                author: {
                    id: "Mohammed Sadiq",
                    name: "Mohammed Sadiq",
                    username: "mzaink",
                    email: "sadiq@gmail.com",
                    description: "Hello World",
                    creationDate: "",
                    activityDetails: {
                        tweetsCount: 0,
                    },
                    image: "https://pbs.twimg.com/profile_images/1483797876522512385/9CcO904A_400x400.jpg",
                    lastUpdatedDate: "",
                    socialDetails: {
                        followeesCount: 0,
                        followersCount: 0,
                    },
                    viewables: {
                        following: true,
                    },
                },
            },
        },
        {
            id: "Not so Wonderful",
            text: "Not so wonderful!",
            authorId: "",
            creationDate: "26 Jun",
            externalId: "",
            interactionDetails: {
                commentsCount: 0,
                likesCount: 0,
            },
            lastUpdatedDate: "26 Jun",
            viewables: {
                liked: true,
                bookmarked: true,
                author: {
                    id: "Mohammed Sadiq",
                    name: "Mohammed Sadiq",
                    username: "mzaink",
                    email: "sadiq@gmail.com",
                    description: "Hello World",
                    creationDate: "",
                    activityDetails: {
                        tweetsCount: 0,
                    },
                    image: "https://pbs.twimg.com/profile_images/1483797876522512385/9CcO904A_400x400.jpg",
                    lastUpdatedDate: "",
                    socialDetails: {
                        followeesCount: 0,
                        followersCount: 0,
                    },
                    viewables: {
                        following: true,
                    },
                },
            },
        },
    ];

    return (
        <BWScene style={styles.sceneStyle}>
            <FlatList
                style={{ width: "100%" }}
                renderItem={({ index, item: tweet }) => {
                    return (
                        <BWColumn>
                            <BWPartialTweet tweet={tweet} />
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
