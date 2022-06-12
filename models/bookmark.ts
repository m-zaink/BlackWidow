import { Model } from "./core/model";
import { ViewableTweet } from "./tweet";

export interface Bookmark extends Model {
    readonly id: String;
    readonly tweetId: String;
    readonly authorId: String;
    readonly creationDate: String;
}

export interface BookmarkViewables {
    readonly tweet: ViewableTweet;
}

export interface ViewableBookmark extends Bookmark {
    readonly viewables: BookmarkViewables;
}
