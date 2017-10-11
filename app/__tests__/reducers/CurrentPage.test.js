import currentPageReducer from './../../client/src/redux/reducers/CurrentPage'
import Page from './../../models/Page.js'

describe('CurrentPage Reducer', () => {

	let defaultPage

	beforeEach(() => {
		defaultPage = {
			page: new Page("", ""),
			fetching: false,
			fetched: false,
			error: null
		}
	})

	it(`CURRENT_PAGE_PENDING: set fetching to true / set fetched to false /
	 set error to null`, () => {
		const action = {
			type: "CURRENT_PAGE_PENDING"
		}
		const result = currentPageReducer(defaultPage, action);
		defaultPage.fetching = true
		defaultPage.fetched = false
		defaultPage.error = null
		expect(result).toEqual(defaultPage);
	})

	it(`CURRENT_PAGE_REJECTED: set fetching to true / set fetched to false / set error to payload`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "CURRENT_PAGE_REJECTED",
			payload: errorPayload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = false
		defaultPage.error = errorPayload
		expect(result).toEqual(defaultPage);
	})

	it(`CURRENT_PAGE_FULFILLED: set fetching to true / set fetched to true / set error to null /
			set page to payload.data`, () => {
		const payload = {data: new Page("title", "summary")}
		const action = {
			type: "CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = true
		defaultPage.error = null
		defaultPage.page = payload.data
		expect(result).toEqual(defaultPage);
	})

	it(`DELETE_CURRENT_PAGE_PENDING: set fetching to true / set fetched to false /
	 set error to null`, () => {
		const action = {
			type: "DELETE_CURRENT_PAGE_PENDING"
		}
		const result = currentPageReducer(defaultPage, action);
		defaultPage.fetching = true
		defaultPage.fetched = false
		defaultPage.error = null
		expect(result).toEqual(defaultPage);
	})

	it(`DELETE_CURRENT_PAGE_REJECTED: set fetching to true / set fetched to false / set error to payload`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "DELETE_CURRENT_PAGE_REJECTED",
			payload: errorPayload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = false
		defaultPage.error = errorPayload
		expect(result).toEqual(defaultPage);
	})

	it(`DELETE_CURRENT_PAGE_FULFILLED: set fetching to true / set fetched to true / set error to null /
			set page to payload.data`, () => {
		const payload = {data: new Page("", "")}
		const action = {
			type: "DELETE_CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = true
		defaultPage.error = null
		defaultPage.page = new Page("", "")
		expect(result).toEqual(defaultPage);
	})
})
