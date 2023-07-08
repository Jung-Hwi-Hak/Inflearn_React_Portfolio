import { type MouseEvent, useState } from "react";
import type { IPaginations01Props } from "./Paginations01.types";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props: IPaginations01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  // ? 게시글 마지막 페이지
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  // ? 페이지 클릭 함수
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: activePage });
  };

  // ? 이전 페이지 클릭 함수
  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  // ? 다음 페이지 클릭 함수
  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    setActivePage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };
  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
