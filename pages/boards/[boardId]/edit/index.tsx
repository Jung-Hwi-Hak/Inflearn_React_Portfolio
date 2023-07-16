// import { gql, useQuery } from "@apollo/client";
// import type {
//   IQuery,
//   IQueryFetchBoardArgs,
// } from "../../../../src/commons/types/generated/types";
// import BoardWriteRepetoring from "../../../../src/components/units/board/write-repactoring/BoardWrite.index";
// import { useQueryIdChecker } from "../../../../src/components/commons/hooks/customs/useQueryIdChecker";

// const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       _id
//       writer
//       title
//       contents
//       youtubeUrl
//       boardAddress {
//         zipcode
//         address
//         addressDetail
//       }
//       images
//     }
//   }
// `;

// export default function BoardsEditPage(): JSX.Element {
//   const { id: boardId } = useQueryIdChecker("boardId");

//   const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
//     FETCH_BOARD,
//     {
//       variables: { boardId },
//     }
//   );

//   return <BoardWriteRepetoring isEdit={true} data={data} />;
// }

import BoardWriteRepetoring from "../../../../src/components/units/board/write-repactoring/BoardWrite.index";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";

export default function BoardsEditPage(): JSX.Element {
  const { data } = useQueryFetchBoard();
  return <BoardWriteRepetoring isEdit={true} data={data} />;
}
