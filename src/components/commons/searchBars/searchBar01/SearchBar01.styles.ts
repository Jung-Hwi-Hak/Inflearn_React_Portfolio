import styled from "@emotion/styled";

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

export const SearchText = styled.span`
  font-size: 14px;
`;

export const SearchInput = styled.input`
  font-size: 14px;
  width: 40%;
  border: none;
  border-bottom: 2px solid gray;
  padding: 5px;
  margin-left: 10px;
  background-color: transparent;
  outline: none;
`;
