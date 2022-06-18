import { Session, User } from "../../models";
import DataSource from "../core/dataSource";

export class CurrentUserDataSource extends DataSource {
    static readonly shared = new CurrentUserDataSource();

    private _user?: User;
    private _session?: Session;

    private constructor() {
        super();
    }

    user(): User | undefined {
        return this._user;
    }

    session(): Session | undefined {
        return this._session;
    }
}
