const AccessReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_TAB':
      return {
        ...state,
        tabSelected: action.payload,
      }
    case 'SET_REQUEST_LIST':
      return {
        ...state,
        requestList: action.payload,
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
    case 'SET_SEARCH_LIST':
      return {
        ...state,
        searchResult: action.payload,
      }
    default:
      return state
  }
}

export default AccessReducer