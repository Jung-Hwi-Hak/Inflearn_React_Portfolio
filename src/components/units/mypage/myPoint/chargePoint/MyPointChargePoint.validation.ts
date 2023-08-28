import * as yup from "yup";

export interface IPaymentYupSchema {
  price: string;
}

export const paymentYupSchema = yup.object({
  price: yup.string().required(),
});
