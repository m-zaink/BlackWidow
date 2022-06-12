import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BWRoute } from "../core/navigators/route";
import { scaledSize } from "../core/dimensions";

const { Navigator, Screen: Scene } = createBottomTabNavigator();

const HomeScene = () => {
    return (
        <Navigator>
            <Scene
                name={BWRoute.timeline.path.valueOf()}
                component={BWRoute.timeline.component}
                options={{
                    title: BWRoute.timeline.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="home-sharp" size={scaledSize(24)} />
                        ) : (
                            <Ionicons name="home-outline" size={scaledSize(24)} />
                        );
                    },
                }}
            />
            <Scene
                name={BWRoute.explore.path.valueOf()}
                component={BWRoute.explore.component}
                options={{
                    title: BWRoute.explore.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="md-search-sharp" size={scaledSize(24)} />
                        ) : (
                            <Ionicons name="md-search-outline" size={scaledSize(24)} />
                        );
                    },
                }}
            />
            <Scene
                name={BWRoute.notifications.path.valueOf()}
                component={BWRoute.notifications.component}
                options={{
                    title: BWRoute.notifications.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="notifications-sharp" size={scaledSize(24)} />
                        ) : (
                            <Ionicons name="notifications-outline" size={scaledSize(24)} />
                        );
                    },
                }}
            />
            <Scene
                name={BWRoute.self.path.valueOf()}
                component={BWRoute.self.component}
                options={{
                    title: BWRoute.self.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="person-circle-sharp" size={scaledSize(24)} />
                        ) : (
                            <Ionicons name="person-circle-outline" size={scaledSize(24)} />
                        );
                    },
                }}
            />
        </Navigator>
    );
};

export default HomeScene;
