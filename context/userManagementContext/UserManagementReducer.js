const UserManagementReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_TAB':
      return {
        ...state,
        tabSelected: action.payload,
      }
    case 'SET_USERS_LIST':
      return {
        ...state,
        usersList: action.payload,
      }
    case 'SET_SELECTED_ROW':
      return {
        ...state,
        rowSelected: action.payload,
      }
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.payload,
      }
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.payload,
      }
    case 'SET_ORIGINAL_DATA':
      return {
        ...state,
        originalResult: action.payload,
      }
    case 'RESET_DATA':
      return {
        ...state,
        usersList: state.originalResult,
      }
    default:
      return state
  }
}

export default UserManagementReducer