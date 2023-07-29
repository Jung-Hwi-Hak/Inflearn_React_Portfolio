import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  width: 400px;
  height: calc(100vh / 2);
`;
export const LoginH1 = styled.h1`
  margin: 30px 0;
`;
export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginText = styled.span`
  width: 15%;
  text-align: left;
`;
export const LoginInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
`;

export const SubWrapper = styled.div`
  display: flex;
  /* margin-bottom: 30px; */
  &.login__bottom {
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  border: 1px solid #252525;
  color: #fff;
  background-color: #000;
  padding: 10px;
  width: 30%;

  &:hover {
    color: tomato;
  }
`;
