import React from 'react'

import { render } from 'react-dom'

import css from './Main.scss'

import Nav from './containers/Nav.jsx'
import Index from './containers/Index.jsx'
import Viewer from './containers/Viewer.jsx'
import Maker from './containers/Maker.jsx'

import { Router, Route } from 'react-router'

import { Provider } from 'react-redux'
import providerStore, { history } from './redux/store'

const router = (
	<Provider store={providerStore}>
		<Router history={history}>
			<div id="app-container">
				<div id="nav-container">
					<Route path="/" component={Nav} />
				</div>
				<div id="content-container">
					<Route exact path="/" component={Index} />
					<Route path="/view" component={Viewer} />
					<Route path="/maker" component={Maker} />
				</div>
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))
