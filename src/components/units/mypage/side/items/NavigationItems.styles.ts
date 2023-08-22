import styled from "@emotion/styled";
import type { INavigationItemProps } from "./NavigationItems.types";

export const NavigationItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const NavigationImg = styled.img`
  filter: ${(props: INavigationItemProps) =>
    props.isFocus ? "opacity(0.5) drop-shadow(0 0 gold)" : "opacity(0.5) drop-shadow(0 0 0);"};
`;
export const NavigationText = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 6px;
  color: #828282;
  .navigation__img.focus & {
    color: #000;
  }
`;
