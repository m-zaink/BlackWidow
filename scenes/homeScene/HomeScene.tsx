import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScene from "./exploreScene/ExploreScene";
import TimelineScene from "./feedScene/TimelineScene";
import NotificationsScene from "./notificationsScene/NotificationsScene";
import SelfScene from "./selfScene/SelfScene";
import Ionicons from "@expo/vector-icons/Ionicons";

const { Navigator, Screen: Scene } = createBottomTabNavigator();

const HomeScene = () => {
    return (
        <Navigator>
            <Scene
                name="Timeline"
                component={TimelineScene}
                options={{
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
                name="Explore"
                component={ExploreScene}
                options={{
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
                name="Notifications"
                component={NotificationsScene}
                options={{
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
                name="Self"
                component={SelfScene}
                options={{
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
