import styled from "@emotion/styled";
import type { IPointError } from "./MyPointChargePoint.types";

export const Wrapper = styled.div`
  margin-top: 50px;
  position: relative;
  /* background-color: tomato; */
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InputTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const InputPoint = styled.input`
  border: none;
  border-bottom: 3px solid black;
  outline: none;
  padding: 5px 0px;
  font-size: 36px;
  font-weight: 700;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.div`
  display: ${(props: IPointError) => (props.isError ? "block" : "none")};
  color: tomato;
`;

export const UnitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const UnitItem = styled.button`
  width: 20%;
  padding: 10px 0;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  font-weight: 700;
  position: relative;
  padding: 25px 0;
  width: 40%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
