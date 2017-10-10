import axios from 'axios'

export function getCurrentPageByTitle(title) {
	return {
		type: 'CURRENT_PAGE',
		payload: axios.get(`http://localhost:3000/db/wiki/page/title/${title}`)
	}
}

export function deletePageByTitle(title) {
	return {
		type: 'DELETE_CURRENT_PAGE',
		payload: axios.delete(`http://localhost:3000/db/wiki/page/title/${title}`)
			.catch((err) => {console.log("error: ", err);})
	}
}
