import { useState, useContext, useEffect } from 'react'
import styles from './AccessSearch.module.css';
import Content from '../../../assets/content/content.json'
import SearchIcon from '../../../assets/svgs/SearchIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import { AccessContext } from '../../../context/accessContext/AccessState'
import { getSearchData } from '../../../services/search/dataSearchService'
import { getRoleLabel, getRoleValue } from '../../../utils/helper'


const options = Object.entries(Content.accessRequestSearchOptions).map(([k,v]) => {
  return  {label: v, value: k}
});

export default function AccessSearch() {
  const {
    setSearchString,
    searchString,
    requestList,
    setRequestList,
    resetData,
    tabSelected,
  } = useContext(AccessContext)
  const [valueSelected, setValueSelected] = useState(options[0])
  const [fieldOptions, setFieldOptions] = useState(options)

  useEffect(() => {
    if(tabSelected === 'pending') {
      const filteredOptions = options.filter(item => item.value !== 'rejectionReason')
      setFieldOptions(filteredOptions)
      //const x = myArray.splice(index, 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tabSelected])

  const handleSearchString = (searchText) => {
    setSearchString ? setSearchString(searchText) : ''
    searchText.length === 0 ? clearSearch() : ""
}

const clearSearch = () => {
  document.getElementById('searchInput').value = ''
  setSearchString ? setSearchString('') : ''
  resetData ? resetData() : ''
}

const doSearch = (e) => {
  if(e.keyCode === 13){
    for (const request of requestList) {
      // Change request role value to label value for search
      request.requestedRole = getRoleLabel(request.requestedRole)
    }
    let searchFields = options.map((option) => option.value)
    const searchResult = getSearchData(searchString, searchFields, requestList)
    for (const result of requestList) {
      // Once filtering is complete change request role value back
      result.requestedRole = getRoleValue(result.requestedRole)
    }
    setRequestList(searchResult)
  }
  if((e.type === 'click' || e.keyCode === 13 ) && searchString.length === 0){
    resetData ? resetData() : ''
  }
}

  return (
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <div>
          <input
            id="searchInput"
            placeholder={Content.accessRequest.searchPlaceholder}
            onChange={(e) => handleSearchString(e.target.value)}
            onKeyDown={(e) => doSearch(e)}
            autoComplete="off"
            />

          {searchString.length === 0 && (
              <span className={styles.searchIcon}>
                <button
                    id="searchButton"
                    className={styles.searchButton}
                    onClick={(e) => doSearch(e)}
                    aria-label={Content.propertySearch.searchIcon}
                >
                  <SearchIcon />
                </button>
              </span>
          )}

            {searchString.length > 0 && (
                <span className={styles.searchIcon}>
                    <button
                        className={styles.closeButton}
                        onClick={() => clearSearch()}
                    >
                        <CloseIcon />
                    </button>
                </span>
            )}
					</div>
      </div>
    </div>
  )
}
