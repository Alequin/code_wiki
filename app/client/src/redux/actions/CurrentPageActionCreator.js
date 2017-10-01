import axios from 'axios'

export function getCurrentPageByTitle(title) {
	return {
		type: 'CURRENT_PAGE',
		payload: axios.get(`http://localhost:3000/db/wiki/page/${title}`)
	}
}
