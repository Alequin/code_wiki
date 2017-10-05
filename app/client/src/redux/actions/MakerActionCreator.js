
export function editPageTitle(title){
	console.log(title);
	return {
		type: 'EDIT_TITLE',
		payload: title
	}
}
