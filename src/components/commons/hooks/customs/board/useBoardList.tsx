import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
interface IUseBoardListReturns {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  searchDate: string[];
  setSearchDate: Dispatch<SetStateAction<string[]>>;
}

export const useBoardList = (): IUseBoardListReturns => {
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchDate, setSearchDate] = useState([""]);

  return {
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    searchKeyword,
    setSearchKeyword,
    searchDate,
    setSearchDate,
  };
};
