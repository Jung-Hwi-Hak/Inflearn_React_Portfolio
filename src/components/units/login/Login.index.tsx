import { useLogin } from "../../commons/hooks/customs/useLogin";
import { useMoveToPage } from "../../commons/hooks/customs/useMoveToPage";
import * as S from "./Login.styles";
import { Error } from "../../commons/emotions/commonsStyle";
export default function LoginPage(): JSX.Element {
  const { handleSubmit, register, onClickLogin, formState } = useLogin();
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.LoginH1>LOGIN</S.LoginH1>
      <S.LoginWrapper>
        <S.SubWrapper>
          <S.LoginText>ID: </S.LoginText>
          <S.LoginInput {...register("userId")} type="text" />
        </S.SubWrapper>
        <Error>{formState.errors.userId?.message}</Error>
        <S.SubWrapper>
          <S.LoginText>PW: </S.LoginText>
          <S.LoginInput {...register("userPw")} type="password" />
        </S.SubWrapper>
        <Error>{formState.errors.userPw?.message}</Error>
        <S.SubWrapper className="login__bottom">
          <S.Button onClick={handleSubmit(onClickLogin)}>LOGIN</S.Button>
          <S.Button onClick={onClickMoveToPage("/signup")}>SIGN UP</S.Button>
        </S.SubWrapper>
      </S.LoginWrapper>
    </S.Container>
  );
}
