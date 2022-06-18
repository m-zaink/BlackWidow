import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";
import { TweetSceneStackParameters } from "../../TweetScene/TweetScene";
import { TimelineSceneParameters } from "./TimelineScene";

export type TimlineStackParameters = TimelineSceneParameters & TweetSceneStackParameters;

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator<TimlineStackParameters>();

const TimelineStack = () => {
    return (
        <StackNavigator
            initialRouteName="timelineScene"
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
                name={"timelineScene"}
                component={BWRoute.timeline.scene}
                options={{
                    title: BWRoute.timeline.title?.valueOf(),
                }}
            />
            <StackScene
                name={"tweetScene"}
                component={BWRoute.tweet.scene}
                options={{
                    title: BWRoute.tweet.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default TimelineStack;
