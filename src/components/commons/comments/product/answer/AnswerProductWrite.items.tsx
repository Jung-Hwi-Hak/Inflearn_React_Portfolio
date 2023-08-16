// import * as S from "../../product/view/CommentsProductView.styles";
// import { useToggle } from "../../../hooks/customs/useToggle";
// import type { IAnswerProductWriteProps } from "./AnswerProductWrite.types";
// import CommonetsProductWrite from "../wirte/CommentsProductWrite.index";
// import { getDate } from "../../../../../commons/libraries/utils";
// import { useRecoilState } from "recoil";
// import { userIDState } from "../../../../../commons/stores";
// import { useProductComment } from "../../../hooks/customs/product/useProductComment";
// import { memo } from "react";
// import { useQueryFetchUseditemQuestionAnswers } from "../../../hooks/queries/useQueryFetchUseditemQuestionAnswers";

// function AnswersProductItem(props: IAnswerProductWriteProps) {
//   const [isEdit, onToggleEdit] = useToggle();
//   //   const [isAnswer, onToggleAnswer] = useToggle();
//   const [userId] = useRecoilState(userIDState);
//   const { onClickDelete } = useProductComment(props.el);
//   const { data: answersData } = useQueryFetchUseditemQuestionAnswers(props.el._id);
//   console.log(answersData);
//   return (
//     <>
//       {!isEdit && (
//         <>
//           {answersData?.fetchUseditemQuestionAnswers.map((el) => (
//             <S.ItemWrapper key={el._id}>
//               <S.FlexWrapper>
//                 <S.Avatar src="/images/avatar.png" />
//                 <S.MainWrapper>
//                   <S.WriterWrapper>
//                     <S.Writer>{el.user.name}</S.Writer>
//                     <S.Contents>{el.contents}</S.Contents>
//                   </S.WriterWrapper>
//                 </S.MainWrapper>
//                 {el.user.email === userId ? (
//                   <S.OptionWrapper>
//                     <S.UpdateIcon
//                       src="/images/boardComment/list/option_update_icon.png/"
//                       onClick={onToggleEdit}
//                     />
//                     <S.DeleteIcon
//                       src="/images/boardComment/list/option_delete_icon.png/"
//                       onClick={onClickDelete(props.el._id)}
//                     />
//                   </S.OptionWrapper>
//                 ) : (
//                   <S.AnswerIcon src="/images/answer.svg/" />
//                 )}
//               </S.FlexWrapper>
//               <S.bottomWrapper>
//                 <S.DateString>{getDate(el?.createdAt)}</S.DateString>
//                 {/* {isAnswer && (
//             <AnswerProductWrite isEdit={false} onToggleAnswer={onToggleAnswer} el={props.el} />
//           )} */}
//               </S.bottomWrapper>
//             </S.ItemWrapper>
//           ))}
//         </>
//       )}
//       {isEdit && <CommonetsProductWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />}
//     </>
//   );
// }
// export default memo(AnswersProductItem);
