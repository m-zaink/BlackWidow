import { StyleSheet, View, Image, Text } from "react-native";
import { ViewableTweet } from "../../../models";
import BWIconPressable from "./BWIconPressable";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import BWSpacer from "./BWSpacer";
import BWRow from "./BWRow";
import BWColumn from "./BWColumn";

const BWPartialTweet = (props: { tweet: ViewableTweet }) => {
    return (
        <View style={{ flex: 1 }}>
            <BWColumn>
                <Image
                    source={{
                        uri: props.tweet.viewables.author.image.valueOf(),
                    }}
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                    }}
                />
                <BWColumn>
                    <BWRow style={{ alignItems: "center" }}>
                        <Text>{props.tweet.viewables.author.name}</Text>
                        <Text>{props.tweet.viewables.author.username}</Text>
                        <Text>•</Text>
                        <Text>{props.tweet.viewables.author.creationDate}</Text>
                        <BWSpacer />
                        <BWIconPressable
                            icon={
                                <Entypo
                                    name="dots-three-horizontal"
                                    onPress={() => console.log("Options")}
                                />
                            }
                        />
                    </BWRow>
                    <View>
                        <Text>{props.tweet.text}</Text>
                    </View>
                    <BWRow>
                        <BWIconPressable
                            icon={<Ionicons name="heart" />}
                            onPress={() => console.log("Like")}
                        />
                        <BWIconPressable
                            icon={<Ionicons name="chatbubble-outline" />}
                            onPress={() => console.log("Comment")}
                        />
                        <BWSpacer />
                        <BWIconPressable
                            icon={<Ionicons name="bookmark-outline" />}
                            onPress={() => console.log("Bookmark")}
                        />
                    </BWRow>
                </BWColumn>
            </BWColumn>
        </View>
    );
};

const styles = StyleSheet.create({
    rootStyle: {},
    avatarContainerStyle: {},
    avatarStyle: {},
});

export default BWPartialTweet;
