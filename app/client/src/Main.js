import React from 'react'

import { render } from 'react-dom'

import css from './base-styles.scss'

// import components
import Index from './containers/Index.jsx'
import Viewer from './containers/Viewer.jsx'

// import react router dependencies
import { Router, Route } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './redux/store'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={Index} />
				<Route exact path="/" component={Index} />
				<Route path="/view" component={Viewer} />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))
