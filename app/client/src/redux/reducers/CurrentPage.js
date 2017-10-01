function allPages(state = [], action) {

	switch(action.type) {

    case 'CURRENT_PAGE_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'CURRENT_PAGE_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'CURRENT_PAGE_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, data: action.payload.data })

    default:
			return state
	}
}

export default allPages;
