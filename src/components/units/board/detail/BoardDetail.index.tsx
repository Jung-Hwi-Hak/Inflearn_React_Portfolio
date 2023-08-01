import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import BoardDetailHeader from "./header/BoardDetailHeader";
import BoardDetailBody from "./body/BoardDetailBody";
import BoardDetailFooter from "./footer/BoardDetailFooter";
import styled from "@emotion/styled";
import { memo } from "react";

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

function BoardDetail(): JSX.Element {
  const { data } = useQueryFetchBoard();
  const { onClickMoveToPage } = useMoveToPage();
  console.log(data, "디테일 페이지");

  return (
    <>
      <CardWrapper>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
        <BoardDetailFooter onClickMoveToPage={onClickMoveToPage} />
      </CardWrapper>
    </>
  );
}
export default memo(BoardDetail);
