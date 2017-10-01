function allPages(state = [], action) {
	switch(action.type) {

    case 'PAGES_SUMMARIES_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'PAGES_SUMMARIES_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'PAGES_SUMMARIES_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, data: action.payload.data })

    default:
			return state
	}
}

export default allPages;
