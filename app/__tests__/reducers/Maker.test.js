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
