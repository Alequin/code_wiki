import indexPageReducer from './../../client/src/redux/reducers/IndexPage'
import Page from './../../models/Page.js'

describe('CurrentPage Reducer', () => {

	let defaultSummary

	beforeEach(() => {
    defaultSummary = {
    	data: [],
    	selectedPage: "",
    	fetching: false,
    	fetched: false,
    	error: null
    }
	})

  it(`SELECT_PAGE: should set selectedPage to action.pageTitle`, () => {
		const action = {
			type: "SELECT_PAGE",
			pageTitle: "page 1"
		}

		const result = indexPageReducer(defaultSummary, action)
		defaultSummary.selectedPage = action.pageTitle
		expect(result).toEqual(defaultSummary);
	})

  it(`PAGES_SUMMARIES_PENDING: set fetching to true / set fetched to false /
	 set error to null`, () => {
		const action = {
			type: "PAGES_SUMMARIES_PENDING"
		}
		const result = indexPageReducer(defaultSummary, action);
		defaultSummary.fetching = true
		defaultSummary.fetched = false
		defaultSummary.error = null
		expect(result).toEqual(defaultSummary);
	})

	it(`PAGES_SUMMARIES_REJECTED: set fetching to true / set fetched to false / set error to payload`, () => {
		const errorPayload = {error: "returned object"}
		const action = {
			type: "PAGES_SUMMARIES_REJECTED",
			payload: errorPayload
		}

		const result = indexPageReducer(defaultSummary, action)
		defaultSummary.fetching = true
		defaultSummary.fetched = false
		defaultSummary.error = errorPayload
		expect(result).toEqual(defaultSummary);
	})

  it(`PAGES_SUMMARIES_FULFILLED: set fetching to true / set fetched to true / set error to null /
			set data to payload.data`, () => {
		const payload = {data: [1,2,3,4]}
		const action = {
			type: "PAGES_SUMMARIES_FULFILLED",
			payload: payload
		}

    const result = indexPageReducer(defaultSummary, action)
		defaultSummary.fetching = true
		defaultSummary.fetched = true
		defaultSummary.error = null
		defaultSummary.data = payload.data
		expect(result).toEqual(defaultSummary);
	})

})
