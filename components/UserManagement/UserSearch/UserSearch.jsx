import { useState, useContext, useEffect } from 'react'
import styles from './UserSearch.module.css';
import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown'
import SearchIcon from '../../../assets/svgs/SearchIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import { getSearchData } from '../../../services/search/dataSearchService'


const options = Object.entries(Content.usersSearchOptions).map(([k,v]) => {
  return  {label: v, value: k}
});

export default function UserSearch() {
  const {
    setSearchField,
    searchField,
    setSearchString,
    searchString,
    usersList,
    setUsersList,
    resetData,
    tabSelected
  } = useContext(UserManagementContext)
  const [valueSelected, setValueSelected] = useState(options[0])
  const [fieldOptions, setFieldOptions] = useState(options)

  useEffect(() => {
    setSearchField(options[0].value)
    if(tabSelected === 'active') {
      const filteredOptions = options.filter(item => item.value !== 'deactivationReason')
      setFieldOptions(filteredOptions)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tabSelected])

  useEffect(() => {
    clearSearch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchField])

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
  if(e.keyCode == 13){
    const searchResult = getSearchData(searchString, searchField, usersList)
    setUsersList(searchResult)
 }
}

  return (
    <div className={styles.container}>
      <div className={styles.dropdownSection}>
        <Dropdown
            variant='xlarge'
            label={Content.accessRequest.selectPlaceholder}
            options={fieldOptions}
            handleSelection={getSelection}
            selectedValue={valueSelected}
            className={styles.searchField}
        />
        <span className={styles.searchInfo}>{Content.userManagement.searchInfoText}</span>
      </div>
      <div className={styles.searchInput}>
        <div>
          <input
            id="searchInput"
            placeholder={Content.userManagement.searchPlaceholder}
            onChange={(e) => handleSearchString(e.target.value)}
            onKeyDown={doSearch}
            autoComplete="off"
            />

          {searchString.length < 1 && (
              <span className={styles.searchIcon}>
                  <SearchIcon />
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
