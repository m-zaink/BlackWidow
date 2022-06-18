import React from "react";
import ExploreScene from "../../HomeScene/ExploreScene/ExploreScene";
import TimelineScene from "../../HomeScene/TimelineScene/TimelineScene";
import NotificationsScene from "../../HomeScene/NotificationsScene/NotificationsScene";
import SelfScene from "../../HomeScene/SelfScene/SelfScene";
import TweetScene from "../../TweetScene/TweetScene";

export interface Route {
    path: String;
    title?: String;
    scene: React.ComponentType<any>;
}

export class BWRoute {
    static readonly timeline: Route = {
        path: "timeline",
        title: "Timeline",
        scene: TimelineScene,
    };

    static readonly explore: Route = {
        path: "explore",
        title: "Explore",
        scene: ExploreScene,
    };

    static readonly notifications: Route = {
        path: "notifications",
        title: "Notifications",
        scene: NotificationsScene,
    };

    static readonly self: Route = {
        path: "self",
        title: "Self",
        scene: SelfScene,
    };

    static readonly tweet: Route = {
        path: "tweet",
        title: "Tweet",
        scene: TweetScene,
    };
}
