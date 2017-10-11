import makerReducer from './../../client/src/redux/reducers/Maker'
import Page from './../../models/Page.js'

describe('Maker Reducer', () => {

	let defaultPage

	beforeEach(() => {
		defaultPage = {
			page: new Page("", ""),
			fetching: false,
			fetched: false,
			error: null
		}
	})

	it(`EDIT_TITLE: set title to payload`, () => {
		const action = {
			type: "EDIT_TITLE",
			payload: "new title"
		}
		const result = makerReducer(defaultPage, action)
		defaultPage.page.title = action.payload
		expect(result).toEqual(defaultPage)
	})

	it(`EDIT_SUMMARY: set summary to payload`, () => {
		const action = {
			type: "EDIT_SUMMARY",
			payload: "new summary"
		}
		const result = makerReducer(defaultPage, action)
		defaultPage.page.summary = action.payload
		expect(result).toEqual(defaultPage)
	})

	it(`ADD_TEXT_CONTENT: addes a blank text content object to content array`, () => {
		const action = {
			type: "ADD_TEXT_CONTENT",
		}
		const result = makerReducer(defaultPage, action)
		defaultPage.page.content.push(
			{
	      title: "",
	      type: "text",
	      value: "",
	      position: 0
	    }
		)
		expect(result).toEqual(defaultPage)
	})

	it(`EDIT_CONTENT_TITLE: edits the title of the content at position given by the
		payload`, () => {
		let action = {
			type: "ADD_TEXT_CONTENT",
		}
		let result = makerReducer(defaultPage, action)
		action = {
			type: "EDIT_CONTENT_TITLE",
			payload: {position: 0, title: "new title"}
		}
		result = makerReducer(defaultPage, action)

		defaultPage.page.content.push(
			{
	      title: action.payload.title,
	      type: "text",
	      value: "",
	      position: 0
	    }
		)
		expect(result).toEqual(defaultPage)
	})

	it(`EDIT_CONTENT_VALUE: edits the value of the text content at position given by the
		payload`, () => {
		let action = {
			type: "ADD_TEXT_CONTENT",
		}
		let result = makerReducer(defaultPage, action)
		action = {
			type: "EDIT_CONTENT_VALUE",
			payload: {position: 0, value: "new title"}
		}
		result = makerReducer(defaultPage, action)

		defaultPage.page.content.push(
			{
	      title: action.payload.value,
	      type: "text",
	      value: "",
	      position: 0
	    }
		)
		expect(result).toEqual(defaultPage)
	})

	it(`NEW_PAGE_PENDING: set fetching to true / set fetched to false /
	 set error to null`, () => {
		const action = {
			type: "NEW_PAGE_PENDING"
		}
		const result = makerReducer(defaultPage, action);
		expect(result.fetching).toBe(true);
		expect(result.fetched).toBe(false);
		expect(result.error).toBe(null);
	})

	it(`NEW_PAGE_REJECTED: set fetching to true / set fetched to false / set error to payload`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "NEW_PAGE_REJECTED",
			payload: errorPayload
		}

		const result = makerReducer(defaultPage, action)
		expect(result.fetching).toBe(true);
		expect(result.fetched).toBe(false);
		expect(result.error).toBe(errorPayload);
	})

	it(`NEW_PAGE_FULFILLED: set fetching to true / set fetched to true / set error to null /
			set page to a blank page`, () => {
		const payload = {data: new Page("", "")}
		const action = {
			type: "NEW_PAGE_FULFILLED",
			payload: payload
		}

		const result = makerReducer(defaultPage, action)
		expect(result.fetching).toBe(true);
		expect(result.fetched).toBe(true);
		expect(result.error).toBe(null);
		expect(result.page).toEqual(new Page("",""));
	})
})
