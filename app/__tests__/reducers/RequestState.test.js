import RequestState from './../../client/src/redux/reducers/RequestState'

describe('RequestState', () => {

	it('setStatePending: adds property fetching set to true and fetched to false', () => {
		const result = RequestState.setStatePending({});
    const expected = {fetching: true, fetched: false, error: null};
    expect(result).toMatchObject(expected);
	})

  it(`setStateRejected: adds property fetching set to true and fetched to false and
      error set to the second argument`, () => {
		const result = RequestState.setStateRejected({}, "error");
    const expected = {fetching: true, fetched: false, error: "error"};
    expect(result).toMatchObject(expected);
	})

  it('setStateFulfilled: adds property fetching set to true and fetched to true', () => {
		const result = RequestState.setStateFulfilled({});
    const expected = {fetching: true, fetched: true, error: null};
    expect(result).toMatchObject(expected);
	})
})
