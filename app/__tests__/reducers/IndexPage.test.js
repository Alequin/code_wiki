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
		expect(result.selectedPage).toBe("page 1");
	})

  it(`PAGES_SUMMARIES_FULFILLED: should set fetching and fetched to true and set
			data to payload.data`, () => {
		const payload = {data: [1,2,3,4]}
		const action = {
			type: "PAGES_SUMMARIES_FULFILLED",
			payload: payload
		}

		const result = indexPageReducer(defaultSummary, action)
		expect(result.data).toBe(payload.data);
	})

})
