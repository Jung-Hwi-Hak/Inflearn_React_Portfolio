import styled from "@emotion/styled";

export const Wrapper = styled.aside`
  display: flex;
  max-width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const UserImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const UserName = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserPointWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 69px;
`;
export const UserPointImg = styled.img`
  width: 24px;
`;

export const UserPoint = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 6px;
`;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li`
  display: flex;
  margin-bottom: 15px;
`;
export const NavigationImg = styled.img`
  filter: opacity(0.5) drop-shadow(0 0 0);
  .active {
    filter: opacity(0.5) drop-shadow(0 0 1);
  }
`;
export const NavigationText = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 6px;
`;
