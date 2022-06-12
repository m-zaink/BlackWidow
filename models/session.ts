import { Model } from "./core/model";

export interface Session extends Model {
    readonly accessToken: String;
}
