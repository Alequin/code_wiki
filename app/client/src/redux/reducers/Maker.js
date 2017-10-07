import Page from "./../../../../server_src/models/Page.js"

const defaultPage = new Page("", "");

function maker(state = defaultPage, action) {
	state = !state ? defaultPage : Object.assign({}, state);
	const page = Page.newPageFromHash(state);
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
			page.content[payload.position].title = payload.title
			break;

		case "EDIT_TEXT_CONTENT_VALUE":
			page.content[payload.position].value = payload.value
			break;
	}

	return page;
}

export default maker;
