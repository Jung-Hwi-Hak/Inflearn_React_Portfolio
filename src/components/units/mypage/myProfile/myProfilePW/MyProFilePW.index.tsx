import { memo } from "react";
import * as S from "./MyProFilePW.styles";
import { Error } from "../../../../commons/emotions/commonsStyle";
import { useMyProfilePW } from "../../../../commons/hooks/customs/mypage/useMyProfilePW";
function MyProfilePW(): JSX.Element {
  const { register, formState, handleSubmit, onClickSubmit } = useMyProfilePW();

  return (
    <>
      <S.Wrapper>
        <S.Title>비밀번호 변경</S.Title>
        <S.InputWrapper>
          <S.InputText>현재 비밀번호</S.InputText>
          <S.Input
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요."
            {...register("userPw")}
          />
        </S.InputWrapper>
        <Error>{formState.errors.userPw?.message}</Error>
        <S.InputWrapper>
          <S.InputText>새 비밀번호</S.InputText>
          <S.Input
            type="password"
            placeholder="새 비밀번호를 입력해 주세요."
            {...register("changeUserPw")}
          />
        </S.InputWrapper>
        <Error>{formState.errors.changeUserPw?.message}</Error>
        <S.InputWrapper>
          <S.InputText>새 비밀번호 확인</S.InputText>
          <S.Input
            type="password"
            placeholder="새 비밀번호를 확인해 주세요."
            {...register("changeUserPwConfirm")}
          />
        </S.InputWrapper>
        <Error>{formState.errors.changeUserPwConfirm?.message}</Error>

        <S.SubmitButton onClick={handleSubmit(onClickSubmit)}>비밀번호 변경</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}

export default memo(MyProfilePW);
