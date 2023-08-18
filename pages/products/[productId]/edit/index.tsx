import { useQueryIdChecker } from "../../../../src/components/commons/hooks/customs/useQueryIdChecker";
import { useQueryFetchUsedItem } from "../../../../src/components/commons/hooks/queries/useQueryFetchUseditem";
import ProductWriteIndex from "../../../../src/components/units/product/write/ProductWrite.index";

export default function ProductEditPage(): JSX.Element {
  const { id } = useQueryIdChecker("productId");
  const { data } = useQueryFetchUsedItem(id);
  return <ProductWriteIndex isEdit={true} data={data} />;
}
