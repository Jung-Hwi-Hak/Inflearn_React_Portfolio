import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & > *:not(:nth-last-child()) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 52px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InputText = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #4f4f4f;
`;

export const Input = styled.input`
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  /* height: 52px; */
  padding: 14px 0 14px 16px;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  width: 180px;
  height: 52px;
  cursor: pointer;
`;
