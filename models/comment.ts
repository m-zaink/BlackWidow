import { Model } from "./core/model";
import { ViewableUser } from "./user";

export interface Comment extends Model {
    readonly id: String;
    readonly tweetId: String;
    readonly authorId: String;
    readonly text: String;
    readonly creationDate: String;
}

export interface CommentViewables {
    readonly author: ViewableUser;
}

export interface ViewableComment extends Comment {
    readonly viewables: CommentViewables;
}
