import { useState, useContext, useEffect } from 'react'
import styles from './AccessSearch.module.css';
import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown'
import SearchIcon from '../../../assets/svgs/SearchIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import { AccessContext } from '../../../context/accessContext/AccessState'
import { getSearchData } from '../../../services/search/dataSearchService'


const options = Object.entries(Content.accessRequestSearchOptions).map(([k,v]) => {
  return  {label: v, value: k}
});

export default function AccessSearch() {
  const {
    setSearchField,
    searchField,
    setSearchString,
    searchString,
    requestList,
    setRequestList,
    resetData,
    tabSelected,
    originalResult
  } = useContext(AccessContext)
  const [valueSelected, setValueSelected] = useState(options[0])
  const [fieldOptions, setFieldOptions] = useState(options)

  useEffect(() => {
    setSearchField(options[0].value)
    if(tabSelected === 'pending') {
      const filteredOptions = options.filter(item => item.value !== 'rejectionReason')
      setFieldOptions(filteredOptions)
      //const x = myArray.splice(index, 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tabSelected])

  const getSelection = (value) => {
    const option = options.find((element) => element.value === value);
    setValueSelected(option)
    setSearchField(value)
  }

  const handleSearchString = (searchText) => {
    setSearchString(searchText)
}

const clearSearch = () => {
  document.getElementById('searchInput').value = ''
  setSearchString('')
  resetData()
}

const doSearch = (e) => {
  if(e.keyCode === 13){
    const searchResult = getSearchData(searchString, searchField, requestList)
    setRequestList(searchResult)
  }
  if((e.type === 'click' || e.keyCode === 13 ) && searchString.length === 0){
    resetData()
  }
}

  return (
    <div className={styles.container}>
      <div className={styles.dropdownSection}>
        <Dropdown
            variant='xlarge'
            label={Content.managePINDropdown.label}
            options={fieldOptions}
            handleSelection={getSelection}
            selectedValue={valueSelected}
            className={styles.searchField}
        />
        <span className={styles.searchInfo}>{Content.accessRequest.searchInfoText}</span>
      </div>
      <div className={styles.searchInput}>
        <div>
          <input
            id="searchInput"
            placeholder={Content.accessRequest.searchPlaceholder}
            onChange={(e) => handleSearchString(e.target.value)}
            onKeyDown={(e) => doSearch(e)}
            />

          {searchString.length === 0 && (
              <span className={styles.searchIcon}>
                <button
                    className={styles.searchButton}
                    onClick={(e) => doSearch(e)}
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
