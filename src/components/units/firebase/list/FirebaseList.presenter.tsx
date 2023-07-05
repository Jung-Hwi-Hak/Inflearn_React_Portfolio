import type { FirebaseListUIProps } from "./FirebaseList.types";
import * as S from "./FirebaseList.styles";

export default function FirebaseListUI(
  props: FirebaseListUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.TableRow>
        <S.TableColumnHeaderBasic>번호</S.TableColumnHeaderBasic>
        <S.TableColumnHeaderBasic>제목</S.TableColumnHeaderBasic>
        <S.TableColumnHeaderContents>내용</S.TableColumnHeaderContents>
        <S.TableColumnHeaderBasic>작성자</S.TableColumnHeaderBasic>
      </S.TableRow>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.TableRow
          key={index + 1}
          id={props.dataBoardsId[index]}
          onClick={props.onClickMoveToBoardDetail}
        >
          <S.TableColumnBasic>{index + 1}</S.TableColumnBasic>
          <S.TableColumnBasic>{el.title}</S.TableColumnBasic>
          <S.TableColumnContents>{el.contents}</S.TableColumnContents>
          <S.TableColumnBasic>{el.writer}</S.TableColumnBasic>
        </S.TableRow>
      ))}
      <S.Button onClick={props.onClickMoveToBoardNew}>
        <S.PencilIcon src="/images/firebase/pencil.png" />
        게시물 등록
      </S.Button>
    </S.Wrapper>
  );
}
