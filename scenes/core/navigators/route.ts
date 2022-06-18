import React from "react";
import ExploreScene from "../../homeScene/exploreScene/ExploreScene";
import ExploreStack from "../../homeScene/exploreScene/ExploreStack";
import TimelineScene from "../../homeScene/feedScene/TimelineScene";
import TimelineStack from "../../homeScene/feedScene/TimelineStack";
import NotificationsScene from "../../homeScene/notificationsScene/NotificationsScene";
import NotificationsStack from "../../homeScene/notificationsScene/NotificationsStack";
import SelfScene from "../../homeScene/selfScene/SelfScene";
import SelfStack from "../../homeScene/selfScene/SelfStack";
import TweetScene from "../../tweetScene/TweetScene";

export interface Route {
    path: String;
    title?: String;
    component: React.ComponentType<any>;
}

export interface TabRoute {
    path: String;
    component: React.ComponentType<any>;
}

export class BWTabRoute {
    static readonly timeline: TabRoute = {
        path: "timeline-tab",
        component: TimelineStack,
    };

    static readonly explore: TabRoute = {
        path: "explore-tab",
        component: ExploreStack,
    };

    static readonly notifications: TabRoute = {
        path: "notifications-tab",
        component: NotificationsStack,
    };

    static readonly self: TabRoute = {
        path: "self-tab",
        component: SelfStack,
    };
}

export class BWRoute {
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

    static readonly tweet: Route = {
        path: "tweet",
        title: "Tweet",
        component: TweetScene,
    };
}
