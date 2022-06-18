import {
    Empty,
    Failure,
    Success,
} from "../../utilities/typescriptx/typescriptx";
import Assistant from "../core/assistant";
import ShallowStorageAssistant from "./shallowStorageAssistant";
import {
    DeleteFailure,
    RetrieveFailure,
    StoreFailure,
    UpdateFailure,
} from "./types";

export default class StorageAssistant extends Assistant {
    static readonly shallow = new ShallowStorageAssistant();

    async exists(paramters: { key: String }): Promise<Boolean> {
        return false;
    }

    async store<T>(paramters: {
        key: String;
        value: T;
    }): Promise<Success<Empty> | Failure<StoreFailure>> {
        const result = new Failure<StoreFailure>(StoreFailure.unknown);
        return result;
    }

    async retrieve<T>(paramters: {
        key: String;
    }): Promise<Success<T> | Failure<RetrieveFailure>> {
        const result = new Failure<RetrieveFailure>(RetrieveFailure.unknown);
        return result;
    }

    async update<T>(paramters: {
        key: String;
        updatedValue: String;
    }): Promise<Success<Empty> | Failure<UpdateFailure>> {
        const result = new Failure<UpdateFailure>(UpdateFailure.unknown);
        return result;
    }

    async delete<T>(paramters: {
        key: String;
    }): Promise<Success<Empty> | Failure<DeleteFailure>> {
        const result = new Failure<DeleteFailure>(DeleteFailure.unknown);
        return result;
    }
}
