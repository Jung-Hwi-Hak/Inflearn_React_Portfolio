import styled from "@emotion/styled";
import { ShoppingOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const Section = styled.section`
  overflow: hidden scroll;
  width: 80%;
  height: 700px;
  scroll-behavior: auto;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: tomato;
    border-radius: 10px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ItemImage = styled.img`
  width: 160px;
`;

export const ItemInfoWrapper = styled.div`
  width: 60%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const ItenName = styled.h3``;
export const ItemRemarks = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;
export const ItemTags = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ItemInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SellerName = styled.span`
  text-align: center;
`;

export const SellerDate = styled.span`
  margin-left: 15px;
  text-align: center;
`;
export const PickIcon = styled(ShoppingOutlined)`
  margin-left: 10px;
`;
export const PickCount = styled.span`
  margin-left: 5px;
`;

export const ItemInfoRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemPrice = styled.span`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
`;
