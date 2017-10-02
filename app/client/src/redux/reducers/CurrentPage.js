import Page from "./../../../../server_src/models/Page.js"

const defaultPage = {
	data: new Page("", ""),
	fetching: false,
	fetched: false
}

function allPages(state = defaultPage, action) {
	if(!state) state == defaultPage;
	switch(action.type) {

		case 'CURRENT_PAGE_TITLE':
			let newState = Object.assign({}, state);
			return newState.data.title = action.payload;

    case 'CURRENT_PAGE_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'CURRENT_PAGE_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'CURRENT_PAGE_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, data: action.payload.data[0] })

    default:
			return state
	}
}

export default allPages;
