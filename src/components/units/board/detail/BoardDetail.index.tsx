import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useRouter } from "next/router";
import BoardDetailHeader from "./header/BoardDetailHeader";
import BoardDetailBody from "./body/BoardDetailBody";
import BoardDetailFooter from "./footer/BoardDetailFooter";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export default function BoardDetail(): JSX.Element {
  const router = useRouter();

  const { data } = useQueryFetchBoard();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <CardWrapper>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
        <BoardDetailFooter
          onClickMoveToPage={onClickMoveToPage}
          router={router}
        />
      </CardWrapper>
    </>
  );
}
