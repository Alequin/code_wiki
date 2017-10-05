import Page from "./../../../../server_src/models/Page.js"

const defaultPage = new Page("", "");

function maker(state = defaultPage, action) {
	state = !state ? defaultPage : Object.assign({}, state);
	switch(action.type) {

		case "EDIT_TITLE":
      state.title = action.payload;
      break;

		case "EDIT_SUMMARY":
      state.summary = action.payload;
      break;
	}

	return state;
}

export default maker;
