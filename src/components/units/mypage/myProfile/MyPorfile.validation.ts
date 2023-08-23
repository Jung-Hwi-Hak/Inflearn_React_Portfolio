import * as yup from "yup";

export interface IMyProfilePictureYupSchema {
  picture: string;
}

export const myProfilePictureYupSchema = yup.object({
  picture: yup.string(),
});
