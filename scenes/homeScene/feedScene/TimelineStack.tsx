import { createStackNavigator } from "@react-navigation/stack";
import { Tweet, ViewableTweet } from "../../../models";
import { BWRoute } from "../../core/navigators/route";
import { TweetSceneParameters } from "../../tweetScene/TweetScene";

export type TimlineStackParameters = {
    timeline: undefined;
    tweet: TweetSceneParameters;
};

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator<TimlineStackParameters>();

const TimelineStack = () => {
    return (
        <StackNavigator
            screenOptions={{
                headerStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
                headerBackTitle: " ",
                headerTintColor: "black",
            }}
        >
            <StackScene
                name={"timeline"}
                component={BWRoute.timeline.component}
                options={{
                    title: BWRoute.timeline.title?.valueOf(),
                }}
            />
            <StackScene
                name={"tweet"}
                component={BWRoute.tweet.component}
                options={{
                    title: BWRoute.tweet.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default TimelineStack;
