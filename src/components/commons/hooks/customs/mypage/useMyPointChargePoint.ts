import { useState } from "react";
import { useForm } from "react-hook-form";
import type { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import {
  paymentYupSchema,
  type IPaymentYupSchema,
} from "../../../../units/mypage/myPoint/chargePoint/MyPointChargePoint.validation";
import { yupResolver } from "@hookform/resolvers/yup";

interface IReturns {
  register: UseFormRegister<IPaymentYupSchema>;
  handleSubmit: UseFormHandleSubmit<IPaymentYupSchema, undefined>;
  handleInputBlur: () => void;
  onChangePoint: (event: any) => void;
  isError: boolean;
  unitItems: string[];
  onClickPointUp: (point: string) => () => void;
}

export const useMyPointChargePoint = (): IReturns => {
  const [isError, setIsError] = useState(false);
  const unitItems = ["1,000", "10,000", "50,000", "100,000"];
  const { register, handleSubmit, setValue, getValues } = useForm({
    resolver: yupResolver(paymentYupSchema),
    mode: "onChange",
  });

  const onChangePoint = (event: any) => {
    const price = event.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    event.target.value = Number(price.replace(/,/g, "")).toLocaleString("ko-KR");
  };
  const onClickPointUp = (point: string) => () => {
    const tempPrice =
      Number(getValues("price").replace(/,/g, "")) + Number(point.replace(/,/g, ""));
    setValue("price", tempPrice.toLocaleString("ko-KR"));
  };
  const handleInputBlur = () => {
    const numericValue = Number(getValues("price").replace(/,/g, ""));
    if (numericValue >= 1000 && numericValue % 100 === 0) {
      setIsError(false);
    } else {
      setValue("price", "");
      setIsError(true);
    }
  };

  return {
    register,
    handleInputBlur,
    onChangePoint,
    isError,
    unitItems,
    onClickPointUp,
    handleSubmit,
  };
};
