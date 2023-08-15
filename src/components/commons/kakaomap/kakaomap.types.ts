import type { IProductWriteYupSchema } from "../../units/product/write/ProductWrite.validation";
import type {
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  FieldErrors,
} from "react-hook-form";

export interface IKakaomapProps {
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
    images: any[] | undefined;
  }>;
  errors: FieldErrors<IProductWriteYupSchema>;
}
