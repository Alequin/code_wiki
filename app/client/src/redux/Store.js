import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import pageSummariesReducer from "./reducers/PageSummaries.js"
import currentPageReducer from "./reducers/CurrentPage.js"

const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(promise(), routerStuff, thunk);

const reducers = combineReducers({
    summaries: pageSummariesReducer,
    currentPage: currentPageReducer
  }
);

const store = createStore(reducers, middleware);

export default store;
