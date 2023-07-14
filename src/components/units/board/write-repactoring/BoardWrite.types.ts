import type { IQuery } from "../../../../commons/types/generated/types";
// import type { ChangeEvent } from "react";
// import type { Address } from "react-daum-postcode/lib/loadPostcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  // writerError: string;
  // passwordError: string;
  // titleError: string;
  // contentsError: string;
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeFileUrls: (fileUrl: string, index: number) => void;
  // onClickAddressSearch: () => void;
  // onClickAddressToggle: () => void;
  // onCompleteAddressSearch: (data: Address) => void;
  // onClickSubmit: () => void;
  // onClickUpdate: () => void;
  // zipcode: string;
  // address: string;
  // isOpen: boolean;
  // isActive: boolean;
  isEdit: boolean;
  // data?: Pick<IQuery, "fetchBoard">;
  // fileUrls: string[];
}

export interface ISubmitButtonProps {
  // isActive: boolean;
  buttonState: boolean;
}
