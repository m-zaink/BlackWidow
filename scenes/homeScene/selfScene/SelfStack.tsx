import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator();

const SelfStack = () => {
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
                name={BWRoute.self.path.valueOf()}
                component={BWRoute.self.component}
                options={{
                    title: BWRoute.self.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default SelfStack;
