import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 80%;
  padding: 15px;
  border: 1px solid #bdbdbd;
  &.sidebar__item__wrapper:nth-of-type(1) {
    margin-bottom: 15px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 150px;
`;

export const ItemInfoWrapper = styled.div``;

export const ItemName = styled.div`
  min-height: 17.76px;
  font-size: 12px;
  font-weight: 500;
  line-height: 17.76px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ItemRemarks = styled.div`
  min-height: 17.76px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.76px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ItemPrice = styled.div`
  min-height: 23.68px;
  font-size: 16px;
  font-weight: 700;
  line-height: 23.68px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ItemTags = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #bdbdbd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
