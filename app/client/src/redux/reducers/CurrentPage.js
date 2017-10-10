import Page from "./../../../../models/Page.js"
import RequestState from "./RequestState"

const defaultPage = {
	page: new Page("", ""),
	fetching: false,
	fetched: false
}

function allPages(state = defaultPage, action) {
	state = Object.assign({}, state)
	switch(action.type) {

    case 'CURRENT_PAGE_PENDING':
			state = RequestState.setStatePending(state);
			break;
  	case 'CURRENT_PAGE_REJECTED':
			state = RequestState.setStateRejected(state, action.payload);
			break;
  	case 'CURRENT_PAGE_FULFILLED':
			state = RequestState.setStateFulfilled(state);
			state.page = action.payload.data;
			break;

		case 'DELETE_CURRENT_PAGE_PENDING':
			state = RequestState.setStatePending(state);
			break;
  	case 'DELETE_CURRENT_PAGE_REJECTED':
			state = RequestState.setStateRejected(state, action.payload);
			break;
  	case 'DELETE_CURRENT_PAGE_FULFILLED':
			state = RequestState.setStateFulfilled(state);
			state.page = action.payload.data;
			break;
	}

	return state
}

export default allPages;
