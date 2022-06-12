import { Model } from "./core/model";

export const kMaximumPaginatedPageLength = 25;

export interface SuccessData<Data extends Model> {
    data: Data;
}

export interface FailureData<Reason> {
    reason: Reason;
}

export interface PaginationParameters extends Model {
    nextToken?: String;
    limit?: Number;
}

export interface Paginated<T extends Model> extends Model {
    readonly page: T[];
    readonly nextToken?: String;
}
