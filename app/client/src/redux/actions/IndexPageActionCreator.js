import axios from 'axios'

export function getPageSummaries() {
	return {
		type: 'PAGES_SUMMARIES',
		payload: axios.get('http://localhost:3000/db/wiki/summary')
	}
}

export function setSelectedPage(title) {
	return {
		type: 'SELECT_PAGE',
		pageTitle: title
	}
}
