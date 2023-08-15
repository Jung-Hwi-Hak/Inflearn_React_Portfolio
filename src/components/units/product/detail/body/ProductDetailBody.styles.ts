import styled from "@emotion/styled";
import { ShoppingOutlined } from "@ant-design/icons";
interface UploadImgProps {
  focusImg: number;
}

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const ProductInfoWrapper = styled.div`
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const Remarks = styled.span`
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 500;
`;

export const Name = styled.h2`
  color: #4f4f4f;
  font-weight: bold;
`;

export const Price = styled.h1``;

export const Contents = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
  min-height: 150px;
`;

export const IWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 20px;
  top: 0;
  color: #ffd700;
`;

export const PickIcon = styled(ShoppingOutlined)`
  font-size: 36px;
  cursor: pointer;
`;

export const PickCount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const SlideUploadImage = styled.img`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  max-width: 300px;
  min-width: 300px;
  max-height: 300px;
  min-height: 300px;
  margin: 15px 0;
`;

export const UploadImageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 36px;
  margin-bottom: 80px;
`;

export const UploadImage = styled.img<UploadImgProps>`
  position: relative;
  max-width: 80px;
  min-width: 80px;
  max-height: 80px;
  min-height: 80px;
  margin: 15px 0;
  padding: 4px;
  border-radius: 15px;

  &.product_imgs:nth-of-type(${(props) => props.focusImg}) {
    border: 3px solid #ffd700;
  }
`;
export const Tag = styled.span`
  width: 100%;
  display: block;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Line = styled.hr`
  margin: 30px 0;
`;
