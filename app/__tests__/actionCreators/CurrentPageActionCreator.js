import * as actionCreators from './../../client/src/redux/actions/CurrentPageActionCreator'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

describe('CurrentPage Reducer', () => {

	it(`action getCurrentPageByTitle should return an object with properties type
    equal to CURRENT_PAGE and payload equal to an axios request`, () => {
    mock.onGet('http://localhost:3000/db/wiki/page/title/page1')
    .reply(200, {body: "page 1"})

    const action = actionCreators.getCurrentPageByTitle("page1")

    expect(action.type).toEqual("CURRENT_PAGE")

    action.payload
    .then((response) => {
      expect(response.config.url).toEqual("http://localhost:3000/db/wiki/page/title/page1")
      expect(response.data).toEqual({body: "page 1"})
    })
    .catch((next) => {console.log(next)})
	})

  it(`action deletePageByTitle should return an object with properties type
    equal to DELETE_CURRENT_PAGE and payload equal to an axios request`, () => {

    mock.onDelete('http://localhost:3000/db/wiki/page/title/page1')
    .reply(200, {body: "page 1"})

    const action = actionCreators.deletePageByTitle("page1")

    expect(action.type).toEqual("DELETE_CURRENT_PAGE")

    action.payload
    .then((response) => {
      expect(response.config.url).toEqual("http://localhost:3000/db/wiki/page/title/page1")
      expect(response.data).toEqual({body: "page 1"})
    })
    .catch((next) => {console.log(next)})
	})
})
