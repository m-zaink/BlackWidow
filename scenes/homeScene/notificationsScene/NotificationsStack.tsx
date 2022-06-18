import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator();

const NotificationsStack = () => {
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
                name={BWRoute.notifications.path.valueOf()}
                component={BWRoute.notifications.component}
                options={{
                    title: BWRoute.notifications.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default NotificationsStack;
