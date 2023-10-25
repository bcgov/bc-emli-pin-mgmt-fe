import { createContext, useReducer } from "react"
import AccessReducer from './AccessReducer'
const initialState = {
  tabSelected: '',
  requestList: [],
  rowSelected: [],
  searchField: '',
  searchString: '',
  originalResult: []
}

export const AccessContext = createContext(initialState)

export const AccessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AccessReducer, initialState)
  // tab action
  function selectTab(tabName) {
    dispatch({
      type: 'UPDATE_SELECTED_TAB',
      payload: tabName,
    })
  }

  function setRequestList (requests) {
    dispatch({
      type: 'SET_REQUEST_LIST',
      payload: requests,
    })
  }

  function setRowSelected (selectedRows) {
    dispatch({
      type: 'SET_SELECTED_ROW',
      payload: selectedRows,
    })
  }

  function setSearchField (fieldName) {
    dispatch({
      type: 'SET_SEARCH_FIELD',
      payload: fieldName,
    })
  }

  function setSearchString (searchTerm) {
    dispatch({
      type: 'SET_SEARCH_STRING',
      payload: searchTerm,
    })
  }

  function setOriginalResult (results) {
    dispatch({
      type: 'SET_ORIGINAL_DATA',
      payload: results,
    })
  }

  function resetData() {
    dispatch({
      type: 'RESET_DATA',
    });
  }

  return (
    <AccessContext.Provider
      value={{
        tabSelected: state.tabSelected,
        requestList: state.requestList,
        rowSelected: state.rowSelected,
        searchField: state.searchField,
        searchString: state.searchString,
        selectTab,
        setRequestList,
        setRowSelected,
        setSearchField,
        setSearchString,
        setOriginalResult,
        resetData
      }}
    >
      {children}
    </AccessContext.Provider>
  );
}