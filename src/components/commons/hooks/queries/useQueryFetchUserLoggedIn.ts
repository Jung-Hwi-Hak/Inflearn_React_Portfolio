import { gql, useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userIDState } from "../../../../commons/stores";

const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export const useQueryFetchUserLoggedIn = () => {
  const [userId, setUserId] = useRecoilState(userIDState);

  const fetchLoggedIn = async () => {
    const client = useApolloClient();
    const result = await client
      .query({
        query: FETCH_USER_LOGGEDIN,
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log("");
        }
      });
    if (result !== undefined) {
      setUserId(result.data.fetchUserLoggedIn.email);
    }
  };
  return {
    fetchLoggedIn,
    userId,
  };
};
