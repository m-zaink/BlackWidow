import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BWRoute, BWTabRoute } from "../core/navigators/route";
import { scaledSize } from "../core/dimensions";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator: TabNavigator, Screen: TabScene } = createBottomTabNavigator();

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
                name={BWTabRoute.timeline.path.valueOf()}
                component={BWTabRoute.timeline.component}
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
                name={BWTabRoute.explore.path.valueOf()}
                component={BWTabRoute.explore.component}
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
                name={BWTabRoute.notifications.path.valueOf()}
                component={BWTabRoute.notifications.component}
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
                name={BWTabRoute.self.path.valueOf()}
                component={BWTabRoute.self.component}
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
