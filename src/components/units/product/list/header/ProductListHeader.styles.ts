import styled from "@emotion/styled";

interface IIsActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 80%;
`;

export const IsSoldSpan = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: ${(props: IIsActiveProps) => (props.isActive ? "black" : "#4f4f4f")};
  font-weight: ${(props: IIsActiveProps) => (props.isActive ? "bold" : 400)};
  border-bottom: ${(props: IIsActiveProps) => (props.isActive ? "3px solid tomato" : "none")};
  margin-bottom: 15px;
  cursor: pointer;
  &:not(:nth-of-type(1)) {
    margin-left: 10px;
  }
`;
