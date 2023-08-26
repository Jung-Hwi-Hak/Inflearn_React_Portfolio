import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
`;

export const Icon = styled.img`
  display: block;
  border-radius: 50%;

  width: 35px;
  height: 35px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;

export const UserPoint = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid gray;
`;
