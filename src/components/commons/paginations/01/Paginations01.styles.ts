import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) =>
    props.isActive === true ? "tomato" : "black"};
  font-weight: ${(props: IPageProps) =>
    props.isActive === true ? "bold" : "normal"};
  cursor: ${(props: IPageProps) =>
    props.isActive === true ? "none" : "pointer"};
`;
