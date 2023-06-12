import {ChangeEvent,useState} from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWrite(){

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents,setContents] = useState("");

    const router = useRouter();
    const [createBoardComment] = useMutation<Pick<IMutation,"createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
    
    // Writer STATE 함수
    const onChangeWriter = (event:ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    }

    // Password STATE 함수
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    // Contents STATE 함수
    const onChangeContents = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
    }

    // 등록 함수
    const onClickWrite = async () => {
        try{
            if(typeof router.query.boardId !== "string"){
                alert("시스템에 문제가 발생했습니다.");
                return;
            }

            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        contents,
                        rating: 0,
                        password
                    },
                    boardId: router.query.boardId,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId }
                    }
                ]
            });

        }catch(error){
            if(error instanceof Error) alert(error.message);
        }
    }

    return (
        <BoardCommentWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickWrite={onClickWrite}
            contents={contents}
        />
    )
}