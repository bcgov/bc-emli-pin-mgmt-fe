import { createContext, useReducer } from "react"
import UserManagementReducer from "./UserManagementReducer"
const initialState = {
  tabSelected: '',
  usersList: [],
  rowSelected: [],
  searchField: '',
  searchString: '',
  originalResult: []
}

export const UserManagementContext = createContext(initialState)

export const UserManagementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserManagementReducer, initialState)
  // tab action
  function selectTab(tabName) {
    dispatch({
      type: 'UPDATE_SELECTED_TAB',
      payload: tabName,
    })
  }

  function setUsersList (data) {
    dispatch({
      type: 'SET_USERS_LIST',
      payload: data,
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
    <UserManagementContext.Provider
      value={{
        tabSelected: state.tabSelected,
        usersList: state.usersList,
        rowSelected: state.rowSelected,
        searchField: state.searchField,
        searchString: state.searchString,
        selectTab,
        setUsersList,
        setRowSelected,
        setSearchField,
        setSearchString,
        setOriginalResult,
        resetData
      }}
    >
      {children}
    </UserManagementContext.Provider>
  );
}