import type { IQuery } from "../../../../commons/types/generated/types";
import type { IProductWriteYupSchema } from "../../../units/product/write/ProductWrite.validation";
import type {
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";

export interface IKakaomapProps {
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
  watch?: UseFormWatch<IProductWriteYupSchema>;
  register: UseFormRegister<IProductWriteYupSchema>;
  setValue: UseFormSetValue<IProductWriteYupSchema>;
  trigger: UseFormTrigger<{
    name: string;
    remarks: string;
    contents: string;
    price: string;
    tags: string | undefined;
    address: string;
    addressDetail: string;
    lat: string | undefined;
    lng: string | undefined;
    images: any[] | undefined;
  }>;
  errors: FieldErrors<IProductWriteYupSchema>;
}
