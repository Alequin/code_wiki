import React from 'react'

import { render } from 'react-dom'

import css from './base-styles.scss'

import Nav from './containers/Nav.jsx'
import Index from './containers/Index.jsx'
import Viewer from './containers/Viewer.jsx'

import { Router, Route } from 'react-router'

import { Provider } from 'react-redux'
import providerStore, { history } from './redux/store'

const router = (
	<Provider store={providerStore}>
		<Router history={history}>
			<div>
				<Route path="/" component={Nav} />
				<Route exact path="/" component={Index} />
				<Route path="/view" component={Viewer} />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))
