import Page from "./../../../../server_src/models/Page.js"

const defaultState = {
	page: new Page("", ""),
	fetching: false,
	fetched: false,
}

function maker(state = defaultState, action) {
	state = !state ? defaultState : Object.assign({}, state);
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
	    page.addTextContent("", "");
			state = page;
      break;

		case "EDIT_TEXT_CONTENT_TITLE":
			page.content[payload.position].title = payload.title;
			break;

		case "EDIT_TEXT_CONTENT_VALUE":
			page.content[payload.position].value = payload.value;
			break;

		case 'NEW_PAGE_PENDING':
  		state.fetching = true;
			break;
  	case 'NEW_PAGE_REJECTED':
			state.fetching = true;
			state.fetched = false;
			state.error = payload;
			break;
		break;
  	case 'NEW_PAGE_FULFILLED':
			state.fetching = true;
			state.fetched = true;
			page = new Page("", "");
			break;

	}

	state.page = page;
	return state;
}

export default maker;
