import React from "react";
import ExploreScene from "../../homeScene/exploreScene/ExploreScene";
import TimelineScene from "../../homeScene/feedScene/TimelineScene";
import NotificationsScene from "../../homeScene/notificationsScene/NotificationsScene";
import SelfScene from "../../homeScene/selfScene/SelfScene";

export interface Route {
    path: String;
    title?: String;
    component: React.ComponentType;
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
}
