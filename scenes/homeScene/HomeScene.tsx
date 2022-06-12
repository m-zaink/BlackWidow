import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScene from "./exploreScene/ExploreScene";
import TimelineScene from "./feedScene/TimelineScene";
import NotificationsScene from "./notificationsScene/NotificationsScene";
import SelfScene from "./selfScene/SelfScene";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Route } from "../core/navigators/route";

const { Navigator, Screen: Scene } = createBottomTabNavigator();

class HomeSceneRoute {
    static readonly timeline: Route = {
        path: "timeline",
        title: "Timeline",
        component: TimelineScene,
    };

    static readonly explore: Route = {
        path: "explore",
        title: "Explore",
        component: ExploreScene,
    };

    static readonly notifications: Route = {
        path: "notifications",
        title: "Notifications",
        component: NotificationsScene,
    };

    static readonly self: Route = {
        path: "self",
        title: "Self",
        component: SelfScene,
    };
}

const HomeScene = () => {
    return (
        <Navigator>
            <Scene
                name={HomeSceneRoute.timeline.path.valueOf()}
                component={HomeSceneRoute.timeline.component}
                options={{
                    title: HomeSceneRoute.timeline.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="home-sharp" size={24} />
                        ) : (
                            <Ionicons name="home-outline" size={24} />
                        );
                    },
                }}
            />
            <Scene
                name={HomeSceneRoute.explore.path.valueOf()}
                component={HomeSceneRoute.explore.component}
                options={{
                    title: HomeSceneRoute.explore.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="md-search-sharp" size={24} />
                        ) : (
                            <Ionicons name="md-search-outline" size={24} />
                        );
                    },
                }}
            />
            <Scene
                name={HomeSceneRoute.notifications.path.valueOf()}
                component={HomeSceneRoute.notifications.component}
                options={{
                    title: HomeSceneRoute.notifications.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="notifications-sharp" size={24} />
                        ) : (
                            <Ionicons name="notifications-outline" size={24} />
                        );
                    },
                }}
            />
            <Scene
                name={HomeSceneRoute.self.path.valueOf()}
                component={HomeSceneRoute.self.component}
                options={{
                    title: HomeSceneRoute.self.title?.valueOf(),
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Ionicons name="person-circle-sharp" size={24} />
                        ) : (
                            <Ionicons name="person-circle-outline" size={24} />
                        );
                    },
                }}
            />
        </Navigator>
    );
};

export default HomeScene;
