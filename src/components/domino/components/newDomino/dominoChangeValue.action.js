export function changeTopValue(value) {
	return {
		type: 'CHANGE_TOP_VALUE',
		payload: value
	}
}

export function changeBottomValue(value) {
	return {
		type: 'CHANGE_BOTTOM_VALUE',
		payload: value
	}
}