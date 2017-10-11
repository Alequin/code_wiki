import * as actionCreators from './../../client/src/redux/actions/IndexPageActionCreator'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

describe('CurrentPage Reducer', () => {

	it(`action getPageSummaries should return an object with properties type
    equal to PAGES_SUMMARIES and payload equal to an axios request`, () => {
    mock.onGet('http://localhost:3000/db/wiki/summary')
    .reply(200, {body: "page 1"})

    const action = actionCreators.getPageSummaries()

    expect(action.type).toEqual("PAGES_SUMMARIES")

    action.payload
    .then((response) => {
      expect(response.config.url).toEqual("http://localhost:3000/db/wiki/summary")
      expect(response.data).toEqual({body: "page 1"})
    })
    .catch((next) => {console.log(next)})
	})

	it(`action setSelectedPage should return an object with properties type
    equal to SELECT_PAGE and pageTitle equal the given argument`, () => {

    const action = actionCreators.setSelectedPage("title")

		const expected = {
			type: "SELECT_PAGE",
			pageTitle: "title"
		}

		expect(action).toEqual(expected)
	})
})
