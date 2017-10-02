
const defaultSummary = {
	data: [{title: "", summary: ""}],
	fetching: false,
	fetched: false
}

function allPages(state = defaultSummary, action) {
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
