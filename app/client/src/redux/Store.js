import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(routerStuff);

const placeHolderReducer = function(state=[], action){
  switch(action.type){
    default: return state;
  }
}

const reducers = combineReducers({
    placeHolder: placeHolderReducer
  }
);

const store = createStore(reducers, {

  }
);

export default store
