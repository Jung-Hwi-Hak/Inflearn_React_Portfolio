import { useState } from "react";

export const useBoardList = () => {
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
