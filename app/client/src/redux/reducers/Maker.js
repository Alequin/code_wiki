import Page from "./../../../../models/Page.js"
import RequestState from "./RequestState"

const defaultState = {
	page: new Page("", ""),
	fetching: false,
	fetched: false,
	error: null
}

function maker(state = defaultState, action) {
	state = Object.assign({}, state);
	let page = Page.newPageFromHash(state.page);
	const payload = action.payload

	switch(action.type) {

		case "EDIT_TITLE":
      page.title = payload;
      break;

		case "EDIT_SUMMARY":
      page.summary = payload;
      break;

		case "ADD_TEXT_CONTENT":
	    page.addTextContent("", "")
      break

		case "EDIT_CONTENT_TITLE":
			page.content[payload.position].title = payload.title
			break

		case "EDIT_CONTENT_VALUE":
			page.content[payload.position].value = payload.value
			break

		case 'NEW_PAGE_PENDING':
  		state = RequestState.setStatePending(state)
			break
  	case 'NEW_PAGE_REJECTED':
			state = RequestState.setStateRejected(state, payload)
			break
		break;
  	case 'NEW_PAGE_FULFILLED':
		state = RequestState.setStateFulfilled(state)
			page = new Page("", "")
			break

	}

	state.page = page
	return state
}

export default maker;
