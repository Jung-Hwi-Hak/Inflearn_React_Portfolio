import styled from "@emotion/styled";

export const ImgUploadButton = styled.button`
  background-color: ${(props) => (props.isChange ? "blue" : "red")};
`;
