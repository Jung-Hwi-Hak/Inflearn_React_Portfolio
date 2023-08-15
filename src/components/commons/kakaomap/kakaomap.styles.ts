import styled from "@emotion/styled";

export const KakaoMapWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  &.kakao__input__title:not(:nth-of-type(1)) {
    margin-top: 15px;
  }
`;
export const SearchInput = styled.input`
  width: 350px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Error = styled.span`
  padding-top: 10px;
  font-size: 13px;
  color: tomato;
`;
