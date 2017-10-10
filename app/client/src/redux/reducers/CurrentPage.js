import Page from "./../../../../models/Page.js"

const defaultPage = {
	page: new Page("", ""),
	fetching: false,
	fetched: false
}

function allPages(state = defaultPage, action) {
	state = Object.assign({}, state)
	switch(action.type) {

    case 'CURRENT_PAGE_PENDING':
			state.fetching = true;
			break;
  	case 'CURRENT_PAGE_REJECTED':
			state.fetching = true;
			state.error = action.payload;
			break;
  	case 'CURRENT_PAGE_FULFILLED':
			state.fetching = true;
			state.fetched = true;
			state.page = action.payload.data;
			break;

		case 'DELETE_CURRENT_PAGE_PENDING':
			state.fetching = true;
			break;
  	case 'DELETE_CURRENT_PAGE_REJECTED':
			state.fetching = true;
			state.error = action.payload;
			break;
  	case 'DELETE_CURRENT_PAGE_FULFILLED':
			state.fetching = true;
			state.fetched = true;
			state.page = action.payload.data;
			break;
	}

	return state
}

export default allPages;
