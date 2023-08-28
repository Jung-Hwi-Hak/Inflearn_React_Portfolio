import { useCallback, useRef, useState } from "react";
import type { ChangeEvent, RefObject } from "react";
import { checkValidationImage } from "../../../../../commons/libraries/validation/checkValidationImage";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { useMutationUpdateUser } from "../../mutations/useMutationUpdateUser";
import {
  FETCH_USER_LOGGEDIN,
  useQueryFetchUserLoggedIn,
} from "../../queries/useQueryFetchUserLoggedIn";
import { useModal } from "../useModal";
import type { IQuery } from "../../../../../commons/types/generated/types";

interface IUsedMyProfileImageReturns {
  userData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  userImgUrls: string;
  handleImgError: (e: any) => void;
  onClickImg: (ref: RefObject<HTMLInputElement>) => () => void;
  userImgRef: RefObject<HTMLInputElement>;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUploadImg: () => Promise<void>;
  onCancelFile: () => void;
  userImgFile: File | undefined;
}
export const useMyProfileImage = (): IUsedMyProfileImageReturns => {
  const userImgRef = useRef<HTMLInputElement>(null);
  const [userImgFile, setUserImgFile] = useState<File>();
  const [userImgUrls, setUserImgUrls] = useState("");
  const [uploadFileMutation] = useMutationUploadFile();
  const [updateImgMutation] = useMutationUpdateUser();
  const { data: userData } = useQueryFetchUserLoggedIn();
  const { confirmModal, warningModal, successModal } = useModal();

  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/profile.png";
  }, []);

  const onClickImg = useCallback(
    (ref: RefObject<HTMLInputElement>) => (): void => {
      ref.current?.click();
    },
    []
  );

  const onChangeImage = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;

    const isValid = checkValidationImage(file);
    if (!isValid) return;

    try {
      const result = URL.createObjectURL(file);

      setUserImgFile(file);

      setUserImgUrls(result);
    } catch (error) {}
  }, []);

  const onClickUploadImg = useCallback(async () => {
    confirmModal(
      async () => {
        try {
          const result = await uploadFileMutation({ variables: { file: userImgFile } });
          const resultFilesUrl = result.data?.uploadFile.url ?? "";
          await updateImgMutation({
            variables: { updateUserInput: { picture: resultFilesUrl } },
            refetchQueries: [{ query: FETCH_USER_LOGGEDIN }],
          });
          successModal("프로필 사진 변경", "프로필 사진 변경이 성공했습니다.", true);
        } catch (error) {
          warningModal("프로필 사진 변경", "프로필 사진 변경이 실패했습니다.", true);
        }
      },
      "프로필 사진 변경",
      "프로필 사진 변경을 하시겠습니까?",
      true
    );
  }, [userImgFile]);

  const onCancelFile = useCallback(() => {
    if (userImgRef.current === null) return;
    setUserImgFile(undefined);
    setUserImgUrls("");
    userImgRef.current.value = "";
  }, []);

  return {
    userData,
    userImgUrls,
    handleImgError,
    onClickImg,
    userImgRef,
    onChangeImage,
    onClickUploadImg,
    onCancelFile,
    userImgFile,
  };
};
