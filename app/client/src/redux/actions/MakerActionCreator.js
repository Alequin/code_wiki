
import axios from 'axios'

export function postNewPage(page){
	return {
		type: 'NEW_PAGE',
		payload: axios.post(`http://localhost:3000/db/wiki/page`, page)
	}
}

export function editPageTitle(title){
	return {
		type: 'EDIT_TITLE',
		payload: title
	}
}

export function editPageSummary(content){
	return {
		type: 'EDIT_SUMMARY',
		payload: content
	}
}

export function addTextContent(){
	return {
		type: 'ADD_TEXT_CONTENT'
	}
}

export function editTextContentTitle(title, position){
	return {
		type: 'EDIT_CONTENT_TITLE',
		payload: {
			title: title,
			position: position
		}
	}
}

export function editTextContentValue(value, position){
	return {
		type: 'EDIT_CONTENT_VALUE',
		payload: {
			value: value,
			position: position
		}
	}
}
