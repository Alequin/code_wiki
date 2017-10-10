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
})
