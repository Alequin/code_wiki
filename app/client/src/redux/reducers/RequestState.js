
function RequestStateHandler(){}

RequestStateHandler.setStatePending = function(state){
  state.fetching = true;
  state.fetched = false;
  state.error = null;
  return state;
}

RequestStateHandler.setStateRejected = function(state, errorObj){
  state.fetching = true;
  state.fetched = false;
  state.error = errorObj;
  return state;
}

RequestStateHandler.setStateFulfilled = function(state){
  state.fetching = true;
  state.fetched = true;
  state.error = null;
  return state;
}

export default RequestStateHandler
