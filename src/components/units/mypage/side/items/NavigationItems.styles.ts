import styled from "@emotion/styled";

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const NavigationImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const NavigationText = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 6px;
  color: #828282;
  margin-left: 8px;
  .navigation__img.focus & {
    color: #000;
  }
`;
