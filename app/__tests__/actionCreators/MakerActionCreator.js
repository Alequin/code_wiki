import * as actionCreators from './../../client/src/redux/actions/MakerActionCreator'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

describe('Maker actions', () => {

	it(`postNewPage: returns an object with properties type (set to NEW_PAGE)
		and payload (set to an axios request)`, () => {
    mock.onPost('http://localhost:3000/db/wiki/page')
    .reply(200, {body: "page 1"})

		const page = {title: "hello", summary: "word"}
    const action = actionCreators.postNewPage(page)

    expect(action.type).toEqual("NEW_PAGE")

    action.payload
    .then((response) => {
			console.log(response);
			expect(response.config.url).toEqual("http://localhost:3000/db/wiki/page")
      expect(JSON.parse(response.config.data)).toEqual(page)
      expect(response.data).toEqual({body: "page 1"})
    })
    .catch((next) => {console.log(next)})
	})

	it(`editPageTitle: returns an object with properties type (set to EDIT_TITLE)
		and payload (set to the given argument)`, () => {
			const title = "this is a title"
			const result = actionCreators.editPageTitle(title)
			const expected = {
				type: 'EDIT_TITLE',
				payload: title
			}
			expect(result).toEqual(expected)
	})

	it(`editPageSummary: returns an object with properties type (set to EDIT_SUMMARY)
		and payload (set to the given argument)`, () => {
			const summary = "this is a summary"
			const result = actionCreators.editPageSummary(summary)
			const expected = {
				type: 'EDIT_SUMMARY',
				payload: summary
			}
			expect(result).toEqual(expected)
	})

	it(`addTextContent: returns an object with property type (set to ADD_TEXT_CONTENT)`, () => {
			const result = actionCreators.addTextContent()
			const expected = {
				type: 'ADD_TEXT_CONTENT',
			}
			expect(result).toEqual(expected)
	})

	it(`editContentTitle: returns an object with properties type (set to EDIT_TEXT_CONTENT_TITLE)
		and payload (set to an object holding the title value and the position to edit)`, () => {
			const title = "this is a title"
			const result = actionCreators.editContentTitle(title, 0)
			const expected = {
				type: 'EDIT_CONTENT_TITLE',
				payload: {
					title: title,
					position: 0
				}
			}
			expect(result).toEqual(expected)
	})

	it(`editContentValue: returns an object with properties type (set to EDIT_TEXT_CONTENT_VALUE)
		and payload (set to an object holding the value of value and the position to edit)`, () => {
			const value = "this is a value"
			const result = actionCreators.editContentValue(value, 0)
			const expected = {
				type: 'EDIT_CONTENT_VALUE',
				payload: {
					value: value,
					position: 0
				}
			}
			expect(result).toEqual(expected)
	})
})
