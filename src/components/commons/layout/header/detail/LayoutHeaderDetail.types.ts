import type { IQuery } from "../../../../../commons/types/generated/types";

export interface ULayoutHeaderDetail {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
