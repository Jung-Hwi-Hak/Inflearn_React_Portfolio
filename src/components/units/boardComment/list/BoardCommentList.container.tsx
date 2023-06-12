import {useState, MouseEvent} from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList(){

    const router = useRouter();
    if(!router || typeof router.query.boardId !== "string") return <></>

    const [deleteBoardComment] = useMutation<Pick<IMutation,"deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)
    const {data} = useQuery<Pick<IQuery,"fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS,{
        variables: {
            boardId: router.query.boardId
        }
    })

    // 댓글 삭제 함수
    const onClickDelete = async(event:MouseEvent<HTMLImageElement>) =>{
        const password = prompt("비밀번호를 입력하세요.");
        try{
            if(!(event.target instanceof HTMLImageElement)){
                alert("시스템에 문제가 발생했습니다.");
                return;
            }

            await deleteBoardComment({
                variables:{
                    password,
                    boardCommentId: event.target.id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId }
                    }
                ]
            });
        }catch(error){
            if(error instanceof Error){

            }
        }
    }
    return(
        <BoardCommentListUI
            data={data}
            onClickDelete={onClickDelete}
        />
    )
}