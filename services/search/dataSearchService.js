import { filterData, SearchType } from "filter-data";

const getSearchData = (
  searchStr,
  searchField,
  data,
) => {

  const searchConditions = [
    {
      key: searchField,
      value: searchStr,
      type: SearchType.LK
    }
  ];

  return filterData(data, searchConditions);
}

export {
  getSearchData
}