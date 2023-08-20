import styled from "@emotion/styled";
import { DatePicker } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchLabel = styled.label`
  width: 50%;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  height: 55px;
  padding: 14px 0px 14px 16px;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const SearchText = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const SearchIcon = styled.img``;

export const SearchInput = styled.input`
  width: 60%;
  border: none;
  margin-left: 10px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
`;

export const Date = styled(DatePicker.RangePicker)`
  width: 30%;
  margin-left: 25px;
  height: 55px;
  border: 2px solid gray;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
`;

export const Button = styled.button`
  width: 15%;
  margin-left: 15px;
  height: 55px;
  border-radius: 10px;
  padding: 14px 16px;
  background-color: #000;
  cursor: pointer;
  color: #fff;
`;
