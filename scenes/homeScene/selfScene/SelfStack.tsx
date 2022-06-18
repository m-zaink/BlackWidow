import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";
import { TweetSceneStackParameters } from "../../TweetScene/TweetScene";
import { SelfSceneParameters } from "./SelfScene";

type SelfStackParameters = SelfSceneParameters & TweetSceneStackParameters;

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator<SelfStackParameters>();

const SelfStack = () => {
    return (
        <StackNavigator
            initialRouteName="selfScene"
            screenOptions={{
                headerStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
            }}
        >
            <StackScene
                name={"selfScene"}
                component={BWRoute.self.scene}
                options={{
                    title: BWRoute.self.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default SelfStack;
