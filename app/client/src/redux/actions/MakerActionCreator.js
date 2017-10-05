
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
