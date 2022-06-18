import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";
import { ExploreSceneParameters } from "./ExploreScene";

type ExploreStackParameters = ExploreSceneParameters;

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator<ExploreStackParameters>();

const ExploreStack = () => {
    return (
        <StackNavigator
            screenOptions={{
                headerStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
            }}
        >
            <StackScene
                name={"exploreScene"}
                component={BWRoute.explore.scene}
                options={{
                    title: BWRoute.explore.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default ExploreStack;
