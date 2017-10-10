import RequestStateHandler from './../../client/src/redux/reducers/RequestStateHandler'

describe('RequestStateHandler', () => {

	it('setStatePending: adds property fetching set to true and fetched to false', () => {
		const result = RequestStateHandler.setStatePending({});
    const expected = {fetching: true, fetched: false};
    expect(result).toMatchObject(expected);
	})

  it(`setStateRejected: adds property fetching set to true and fetched to false and
      error set to the second argument`, () => {
		const result = RequestStateHandler.setStateRejected({}, "error");
    const expected = {fetching: true, fetched: false, error: "error"};
    expect(result).toMatchObject(expected);
	})

  it('setStateFulfilled: adds property fetching set to true and fetched to true', () => {
		const result = RequestStateHandler.setStateFulfilled({});
    const expected = {fetching: true, fetched: true};
    expect(result).toMatchObject(expected);
	})
})
