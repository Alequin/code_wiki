import Page from "./../../../../server_src/models/Page.js"

const defaultPage = {
	page: new Page("", ""),
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
      return Object.assign({}, state, { fetching: true, fetched: true, page: action.payload.data[0] })

		case 'DELETE_CURRENT_PAGE_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'DELETE_CURRENT_PAGE_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'DELETE_CURRENT_PAGE_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, data: new Page("", "") })

    default:
			return state
	}
}

export default allPages;
