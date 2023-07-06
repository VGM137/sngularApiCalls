const reducer = (state, action) => {

  switch(action.type){

    case 'HOUSE_FILTER':
      return {
        ...state,
        houseFilter: action.payload
      }
    case 'TEXT_FILTER':
      return {
        ...state,
        textFilter: action.payload
      }

    default: return state
  }

}

export default reducer