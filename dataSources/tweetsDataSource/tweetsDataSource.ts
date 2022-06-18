import { Factory } from "react";
import { ViewableTweet } from "../../models";
import { Success } from "../../utilities/typescriptx/typescriptx";
import DataSource from "../core/dataSource";
import { PaginatedTweetsFailure } from "./types";

class TweetsDataSource extends DataSource {
    static readonly shared = new TweetsDataSource();

    private constructor() {
        super();
    }

    async paginatedTweets(): Promise<Success<ViewableTweet[]> | Factory<PaginatedTweetsFailure>> {
        const tweets: ViewableTweet[] = [
            {
                id: "Wonderful",
                text: "Wonderful",
                authorId: "",
                creationDate: "26 Jun",
                externalId: "",
                interactionDetails: {
                    commentsCount: 0,
                    likesCount: 0,
                },
                lastUpdatedDate: "26 Jun",
                viewables: {
                    liked: true,
                    bookmarked: true,
                    author: {
                        id: "Mohammed Sadiq",
                        name: "Mohammed Sadiq",
                        username: "mzaink",
                        email: "sadiq@gmail.com",
                        description: "Hello World",
                        creationDate: "",
                        activityDetails: {
                            tweetsCount: 0,
                        },
                        image: "https://pbs.twimg.com/profile_images/1483797876522512385/9CcO904A_400x400.jpg",
                        lastUpdatedDate: "",
                        socialDetails: {
                            followeesCount: 0,
                            followersCount: 0,
                        },
                        viewables: {
                            following: true,
                        },
                    },
                },
            },
            {
                id: "Not so Wonderful",
                text: "Not so wonderful!",
                authorId: "",
                creationDate: "26 Jun",
                externalId: "",
                interactionDetails: {
                    commentsCount: 0,
                    likesCount: 0,
                },
                lastUpdatedDate: "26 Jun",
                viewables: {
                    liked: true,
                    bookmarked: true,
                    author: {
                        id: "Mohammed Sadiq",
                        name: "Mohammed Sadiq",
                        username: "mzaink",
                        email: "sadiq@gmail.com",
                        description: "Hello World",
                        creationDate: "",
                        activityDetails: {
                            tweetsCount: 0,
                        },
                        image: "https://pbs.twimg.com/profile_images/1483797876522512385/9CcO904A_400x400.jpg",
                        lastUpdatedDate: "",
                        socialDetails: {
                            followeesCount: 0,
                            followersCount: 0,
                        },
                        viewables: {
                            following: true,
                        },
                    },
                },
            },
        ];

        const result = new Success<ViewableTweet[]>(tweets);

        return result;
    }
}

export default TweetsDataSource;
