import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export const useQueryFetchUserLoggedIn = () => {
  const result = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  // const fetchLoggedIn = async () => {
  //   const client = useApolloClient();
  //   const result = await client
  //     .query({
  //       query: FETCH_USER_LOGGEDIN,
  //     })
  //     .catch((error) => {
  //       if (error instanceof Error) {
  //         console.log("");
  //       }
  //     });
  //   if (result !== undefined) {
  //     setUserId(result.data.fetchUserLoggedIn.email);
  //     return result;
  //   }
  // };
  return result;
};
