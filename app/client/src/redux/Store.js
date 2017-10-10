import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import pageSummariesReducer from "./reducers/indexPage.js"
import currentPageReducer from "./reducers/CurrentPage.js"
import makerPageReducer from "./reducers/Maker.js"

import Page from "./../../../models/Page.js"

const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(promise(), routerStuff, thunk);

const reducers = combineReducers({
    indexPage: pageSummariesReducer,
    currentPage: currentPageReducer,
    maker: makerPageReducer
  }
);

const store = createStore(reducers, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
