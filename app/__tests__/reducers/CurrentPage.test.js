import currentPageReducer from './../../client/src/redux/reducers/CurrentPage'
import Page from './../../models/Page.js'

describe('CurrentPage Reducer', () => {

	let defaultPage

	beforeEach(() => {
		defaultPage = {
			page: new Page("", ""),
			fetching: false,
			fetched: false
		}
	})

	it('CURRENT_PAGE_PENDING: should set property fetching to true', () => {
		const action = {
			type: "CURRENT_PAGE_PENDING"
		}
		const result = currentPageReducer(defaultPage, action);
		defaultPage.fetching = true;
		expect(result).toMatchObject(defaultPage);
	})

	it(`CURRENT_PAGE_REJECTED: should set fetching to false and add a property error
		 	with error set to the payload given`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "CURRENT_PAGE_REJECTED",
			payload: errorPayload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.error = {error: "returned object"}
		expect(result).toMatchObject(defaultPage)
	})

	it(`CURRENT_PAGE_FULFILLED: should set fetching and fetched to true and set
			property page to payload.data`, () => {
		const payload = {data: new Page("title", "summary")}
		const action = {
			type: "CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = true
		defaultPage.page = payload.data
		expect(result).toMatchObject(defaultPage)
	})

	it('DELETE_CURRENT_PAGE_PENDING: should set property fetching to true', () => {
		const action = {
			type: "DELETE_CURRENT_PAGE_PENDING"
		}
		const result = currentPageReducer(defaultPage, action);
		defaultPage.fetching = true;
		expect(result).toMatchObject(defaultPage);
	})

	it(`DELETE_CURRENT_PAGE_REJECTED: should set fetching to false and add a property error
		 	with error set to the payload given`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "DELETE_CURRENT_PAGE_REJECTED",
			payload: errorPayload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.error = {error: "returned object"}
		expect(result).toMatchObject(defaultPage)
	})

	it(`DELETE_CURRENT_PAGE_FULFILLED: should set fetching and fetched to true and set
			property page to payload.data`, () => {
		const payload = {data: new Page("", "")}
		const action = {
			type: "DELETE_CURRENT_PAGE_FULFILLED",
			payload: payload
		}

		const result = currentPageReducer(defaultPage, action)
		defaultPage.fetching = true
		defaultPage.fetched = true
		defaultPage.page = payload.data

		expect(result.fetching).toBe(defaultPage.fetching)
		expect(result.fetched).toBe(defaultPage.fetched)

		expect(result.page.title).toBe(defaultPage.page.title)
		expect(result.page.summary).toBe(defaultPage.page.summary)
		expect(result.page.content.length).toBe(defaultPage.page.content.length)
		expect(result.page.tags.length).toBe(defaultPage.page.tags.length)
	})
})
