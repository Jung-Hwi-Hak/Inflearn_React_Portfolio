import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive === true ? "gold" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive === true ? "bold" : "normal")};
  cursor: pointer;
`;
