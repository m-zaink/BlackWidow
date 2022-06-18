import { createStackNavigator } from "@react-navigation/stack";
import { BWRoute } from "../../core/navigators/route";
import { NotificationsSceneParameters } from "./NotificationsScene";

type NotificationsStackParameters = NotificationsSceneParameters;

const { Navigator: StackNavigator, Screen: StackScene } = createStackNavigator<NotificationsStackParameters>();

const NotificationsStack = () => {
    return (
        <StackNavigator
            initialRouteName="notifications"
            screenOptions={{
                headerStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
            }}
        >
            <StackScene
                name={"notifications"}
                component={BWRoute.notifications.scene}
                options={{
                    title: BWRoute.notifications.title?.valueOf(),
                }}
            />
        </StackNavigator>
    );
};

export default NotificationsStack;
