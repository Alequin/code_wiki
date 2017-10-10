
const defaultSummary = {
	data: [],
	selectedPage: "",
	fetching: false,
	fetched: false
}

function indexPage(state = defaultSummary, action) {
	switch(action.type) {

		case 'SELECT_PAGE':
			return Object.assign({}, state, { selectedPage: action.payload })

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

export default indexPage;
