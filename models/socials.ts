import { Model } from "./core/model";
import { ViewableUser } from "./user";

// Follower
export interface Follower extends Model {
    readonly followerId: String;
    readonly creationDate: String;
}

export interface FollowerViewables {
    readonly follower: ViewableUser;
}

export interface ViewableFollower {
    readonly viewables: FollowerViewables;
}

// Followee
export interface Followee extends Model {
    readonly followeeId: String;
    readonly creationDate: String;
}

export interface FolloweeViewables {
    readonly followee: ViewableUser;
}

export interface ViewableFollowee {
    readonly viewables: FolloweeViewables;
}
