import { gql } from "@apollo/client";

// 댓글 fetch
export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!){
        fetchBoardComments(boardId: $boardId){
            _id
            writer
            contents
            rating
            createdAt
        }
    }   
`;

// 댓글 delete
export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!){
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;

