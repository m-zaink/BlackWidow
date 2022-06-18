import {
    Failure,
    Success,
    Empty,
} from "../../utilities/typescriptx/typescriptx";
import StorageAssistant from "./storageAssistant";
import {
    StoreFailure,
    RetrieveFailure,
    UpdateFailure,
    DeleteFailure,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ShallowStorageAssistant implements StorageAssistant {
    async exists(paramters: { key: String }): Promise<Boolean> {
        const element = AsyncStorage.getItem(paramters.key.valueOf());

        return element !== null;
    }

    async store<T>(paramters: {
        key: String;
        value: T;
    }): Promise<Failure<StoreFailure> | Success<Empty>> {
        const isKeyExists = await this.exists({
            key: paramters.key,
        });

        if (isKeyExists) {
            const result = new Failure<StoreFailure>(
                StoreFailure.keyAlreadyExists,
            );
            return result;
        }

        const strigifiedValue = JSON.stringify(paramters.value);

        try {
            await AsyncStorage.setItem(
                paramters.key.valueOf(),
                strigifiedValue,
            );

            const result = new Success<Empty>({});
            return result;
        } catch {
            const result = new Failure<StoreFailure>(StoreFailure.unknown);
            return result;
        }
    }

    async retrieve<T>(paramters: {
        key: String;
    }): Promise<Failure<RetrieveFailure> | Success<T>> {
        try {
            const stringifiedValue = await AsyncStorage.getItem(
                paramters.key.valueOf(),
            );

            if (stringifiedValue !== null) {
                const value = JSON.parse(stringifiedValue);

                const result = new Success<T>(value);
                return result;
            } else {
                const result = new Failure<RetrieveFailure>(
                    RetrieveFailure.keyDoesNotExists,
                );
                return result;
            }
        } catch {
            const result = new Failure<RetrieveFailure>(
                RetrieveFailure.unknown,
            );
            return result;
        }
    }

    async update<T>(paramters: {
        key: String;
        updatedValue: String;
    }): Promise<Failure<UpdateFailure> | Success<Empty>> {
        const isKeyExists = await this.exists({
            key: paramters.key,
        });

        if (!isKeyExists) {
            const result = new Failure<UpdateFailure>(
                UpdateFailure.keyDoesNotExists,
            );
            return result;
        }

        const strigifiedUpdatedValue = JSON.stringify(paramters.updatedValue);

        try {
            await AsyncStorage.setItem(
                paramters.key.valueOf(),
                strigifiedUpdatedValue,
            );

            const result = new Success<Empty>({});
            return result;
        } catch {
            const result = new Failure<UpdateFailure>(UpdateFailure.unknown);
            return result;
        }
    }

    async delete<T>(paramters: {
        key: String;
    }): Promise<Failure<DeleteFailure> | Success<Empty>> {
        const isKeyExists = await this.exists({
            key: paramters.key,
        });

        if (!isKeyExists) {
            const result = new Failure<DeleteFailure>(
                DeleteFailure.keyDoesNotExists,
            );
            return result;
        }

        try {
            await AsyncStorage.removeItem(paramters.key.valueOf());

            const result = new Success<Empty>({});
            return result;
        } catch {
            const result = new Failure<DeleteFailure>(DeleteFailure.unknown);
            return result;
        }
    }
}
