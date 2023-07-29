import * as S from "./Signup.styles";
import { Error } from "../../commons/emotions/commonsStyle";
import { useSignup } from "../../commons/hooks/customs/useSignup";

export default function SignupPage(): JSX.Element {
  const { register, formState, handleSubmit, onClickSubmit } = useSignup();

  return (
    <S.Container>
      <S.LoginH1>SIGN UP</S.LoginH1>
      <S.LoginWrapper>
        <S.SubWrapper>
          <S.LoginText>ID: </S.LoginText>
          <S.LoginInput
            type="text"
            {...register("userId")}
            placeholder="아이디는 3~5자리입니다."
          />
        </S.SubWrapper>
        <Error>{formState.errors.userId?.message}</Error>
        <S.SubWrapper>
          <S.LoginText>PW: </S.LoginText>
          <S.LoginInput
            type="password"
            {...register("userPw")}
            placeholder="비밀번호는 3~5자리입니다."
          />
        </S.SubWrapper>
        <Error>{formState.errors.userPw?.message}</Error>
        <S.SubWrapper>
          <S.LoginText>Name: </S.LoginText>
          <S.LoginInput
            type="text"
            {...register("userName")}
            placeholder="닉네임은 3~5자리입니다."
          />
        </S.SubWrapper>
        <Error>{formState.errors.userName?.message}</Error>
        <S.SubWrapper className="login__bottom">
          <S.Button onClick={handleSubmit(onClickSubmit)}>SUBMIT</S.Button>
        </S.SubWrapper>
      </S.LoginWrapper>
    </S.Container>
  );
}
