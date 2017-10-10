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

	it(`CURRENT_PAGE_FULFILLED: should set fetching and fetched to true and set
			property page to payload.data`, () => {
		const payload = {data: new Page("title", "summary")}
		const action = {
			type: "CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		expect(result.page).toBe(payload.data);
	})

	it(`DELETE_CURRENT_PAGE_FULFILLED: should set fetching and fetched to true and set
			property page to payload.data`, () => {
		const payload = {data: new Page("", "")}
		const action = {
			type: "DELETE_CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		expect(result.page).toBe(payload.data);
	})
})
