import axios from 'axios'

export function setCurrentPageTitle(title){
	return {
		type: 'CURRENT_PAGE_TITLE',
		payload: title
	}
}

export function getCurrentPageByTitle(title) {
	return {
		type: 'CURRENT_PAGE',
		payload: axios.get(`http://localhost:3000/db/wiki/page/title/${title}`)
	}
}
