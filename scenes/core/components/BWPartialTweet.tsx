import { StyleSheet, View, Image, Text } from "react-native";
import { ViewableTweet } from "../../../models";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BWHorizontalSpacer, BWSizeBox, BWSpacer } from "./BWSpacer";
import BWRow from "./BWRow";
import BWColumn from "./BWColumn";
import { scaledSize } from "../dimensions";
import { VoidCallback } from "../types";
import { ReactNode } from "react";
import BWPressable from "./BWPressable";

const ActionPressable = (props: { icon: ReactNode; text?: String; onPress?: VoidCallback }) => {
    return (
        <BWPressable
            style={({ pressed }) => {
                return pressed ? { opacity: 0.4 } : { opacity: 1.0 };
            }}
        >
            <BWRow style={{ alignItems: "center" }}>
                {props.icon}
                {props.text && <BWSizeBox width={scaledSize(8)} />}
                {props.text && <Text style={styles.actionTextStyle}>{props.text}</Text>}
            </BWRow>
        </BWPressable>
    );
};

const BWPartialTweet = (props: { tweet: ViewableTweet }) => {
    return (
        <BWRow style={styles.rootStyle}>
            <Image
                source={{
                    uri: props.tweet.viewables.author.image.valueOf(),
                }}
                style={styles.imageStyle}
            />
            <BWSizeBox width={scaledSize(8)} />
            <View style={{ flex: 1 }}>
                <BWColumn>
                    <BWRow style={{ alignItems: "center" }}>
                        <Text style={styles.nameTextStyle}>{props.tweet.viewables.author.name}</Text>
                        <BWSizeBox width={scaledSize(4)} />
                        <Text style={styles.usernameTextStyle}>{"@" + props.tweet.viewables.author.username}</Text>
                        <BWSizeBox width={scaledSize(4)} />
                        <Text style={styles.dotTextStyle}>•</Text>
                        <BWSizeBox width={scaledSize(4)} />
                        <Text style={styles.dateTimeTextStyle}>{props.tweet.creationDate}</Text>
                        <BWHorizontalSpacer />
                    </BWRow>
                    <BWSizeBox height={scaledSize(4)} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.tweetTextStyle}>{props.tweet.text}</Text>
                    </View>
                    <BWSizeBox height={scaledSize(4)} />
                    <BWRow style={{ justifyContent: "space-between", paddingRight: scaledSize(8) }}>
                        <ActionPressable
                            icon={
                                <Ionicons name="heart-outline" size={scaledSize(16)} style={styles.actionIconStyle} />
                            }
                            text={`${props.tweet.interactionDetails.likesCount}`}
                            onPress={() => console.log("Like")}
                        />
                        <ActionPressable
                            icon={
                                <Ionicons
                                    name="md-chatbox-ellipses-outline"
                                    size={scaledSize(16)}
                                    style={styles.actionIconStyle}
                                />
                            }
                            text={`${props.tweet.interactionDetails.commentsCount}`}
                            onPress={() => console.log("Like")}
                        />
                        <ActionPressable
                            icon={
                                <Ionicons
                                    name="file-tray-full-outline"
                                    size={scaledSize(16)}
                                    style={styles.actionIconStyle}
                                />
                            }
                            onPress={() => console.log("Like")}
                        />
                    </BWRow>
                </BWColumn>
            </View>
        </BWRow>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        padding: scaledSize(8),
    },
    imageStyle: {
        width: scaledSize(40),
        height: scaledSize(40),
        borderRadius: scaledSize(20),
    },
    nameTextStyle: {
        color: "black",
        fontSize: scaledSize(14),
        fontWeight: "bold",
    },
    usernameTextStyle: {
        color: "gray",
        fontSize: scaledSize(14),
    },
    dotTextStyle: {
        color: "gray",
        fontSize: scaledSize(14),
    },
    dateTimeTextStyle: {
        color: "gray",
        fontSize: scaledSize(14),
    },
    tweetTextStyle: {
        color: "black",
        fontSize: scaledSize(14),
    },
    actionIconStyle: {
        color: "gray",
    },
    actionTextStyle: {
        color: "gray",
        fontSize: scaledSize(14),
    },
});

export default BWPartialTweet;
