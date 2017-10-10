import RequestState from "./RequestState"

const defaultSummary = {
	data: [],
	selectedPage: "",
	fetching: false,
	fetched: false,
	error: null
}

function indexPage(state = defaultSummary, action) {
	state = Object.assign({}, state)
	switch(action.type) {

		case 'SELECT_PAGE':
			state.selectedPage = action.pageTitle
			break;

    case 'PAGES_SUMMARIES_PENDING':
			state = RequestState.setStatePending(state)
			break;
  	case 'PAGES_SUMMARIES_REJECTED':
			state = RequestState.setStateRejected(state, action.payload);
			break;
  	case 'PAGES_SUMMARIES_FULFILLED':
			state = RequestState.setStateFulfilled(state);
			state.data = action.payload.data
			break;

	}
	return state
}

export default indexPage;
