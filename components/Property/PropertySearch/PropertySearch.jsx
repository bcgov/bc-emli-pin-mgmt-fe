import Styles from './PropertySearch.module.css'
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'
import SearchIcon from '../../../assets/svgs/SearchIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'

export default function PropertySearch({ getSearchString }) {
    const [searchString, setSearchString] = useState('')
    const [showSearchError, setShowSearchError] = useState(false)

    // Validate 3 chararater as minimum limit
    const handleSearchString = (searchText) => {
        searchText.length < 3
            ? setShowSearchError(true)
            : setShowSearchError(false)
        setSearchString(searchText)
    }

    // Show the error msg as long as click on the input field
    const handleOnFocus = (searchText) => {
        searchText.length < 3
            ? setShowSearchError(true)
            : setShowSearchError(false)
    }

    let address = searchString?.toLowerCase()

    const handleSearch = () => {
        getSearchString(address)
    }

    const clearSearch = () => {
        document.getElementById('searchInput').value = ''
        setShowSearchError(true)
        setSearchString('')
    }

    return (
        <div
            className={
                `${Styles.searchWrap}` + ' flex items-start justify-center'
            }
        >
            <div
                className={
                    `${Styles.searchContentWrap}` +
                    ' flex items-start justify-center'
                }
            >
                <div className="text-left">
                    <div>
                        <input
                            id="searchInput"
                            placeholder={Content.home.searchPlaceHolder}
                            onChange={(e) => handleSearchString(e.target.value)}
                            onFocus={(e) => handleOnFocus(e.target.value)}
                        />
                        {searchString.length < 3 && (
                            <span className={`${Styles.searchIcon}`}>
                                <SearchIcon />
                            </span>
                        )}
                        {searchString.length >= 3 && (
                            <span className={`${Styles.searchIcon}`}>
                                <button
                                    className={`${Styles.closeButton}`}
                                    onClick={() => clearSearch()}
                                >
                                    <CloseIcon />
                                </button>
                            </span>
                        )}
                    </div>
                    {showSearchError && (
                        <div id="error" className={`${Styles.error}`}>
                            <span>{Content.propertySearch.searchBoxError}</span>
                        </div>
                    )}
                </div>
                <div className={`${Styles.searchButtonWrap}`}>
                    <Button
                        variant="primary"
                        size="medium"
                        isDarkBackground={true}
                        disabled={searchString.length < 3}
                        aria-disabled={searchString.length < 3}
                        handleOnClick={handleSearch}
                    >
                        {Content.home.search}
                    </Button>
                </div>
            </div>
        </div>
    )
}
