
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
		type: 'EDIT_TEXT_CONTENT_TITLE',
		payload: {
			title: title,
			position: position
		}
	}
}

export function editTextContentValue(value, position){
	return {
		type: 'EDIT_TEXT_CONTENT_VALUE',
		payload: {
			value: value,
			position: position
		}
	}
}
