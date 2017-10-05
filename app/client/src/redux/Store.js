import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import pageSummariesReducer from "./reducers/PageSummaries.js"
import currentPageReducer from "./reducers/CurrentPage.js"
import makerPageReducer from "./reducers/Maker.js"

import Page from "./../../../server_src/models/Page.js"

const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(promise(), routerStuff, thunk);

const reducers = combineReducers({
    summaries: pageSummariesReducer,
    currentPage: currentPageReducer,
    maker: makerPageReducer
  }
);

const store = createStore(reducers, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
