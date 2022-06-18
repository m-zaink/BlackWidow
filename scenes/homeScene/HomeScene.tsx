import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scaledSize } from "../core/dimensions";
import TimelineStack from "./TimelineScene/TimelineStack";
import ExploreStack from "./ExploreScene/ExploreStack";
import NotificationsStack from "./NotificationsScene/NotificationsStack";
import SelfStack from "./SelfScene/SelfStack";

export type HomeTabParameters = {
    timelineTab: undefined;
    exploreTab: undefined;
    notificationsTab: undefined;
    selfTab: undefined;
};

const { Navigator: TabNavigator, Screen: TabScene } = createBottomTabNavigator<HomeTabParameters>();

const HomeScene = () => {
    return (
        <TabNavigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
                tabBarStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
        >
            <TabScene
                name={"timelineTab"}
                component={TimelineStack}
                options={{
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
            <TabScene
                name="exploreTab"
                component={ExploreStack}
                options={{
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
            <TabScene
                name="notificationsTab"
                component={NotificationsStack}
                options={{
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
            <TabScene
                name="selfTab"
                component={SelfStack}
                options={{
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
        </TabNavigator>
    );
};

export default HomeScene;
