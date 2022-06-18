import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator();

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
                name={BWRoute.explore.path.valueOf()}
                component={BWRoute.explore.component}
                options={{
                    title: BWRoute.explore.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default ExploreStack;
