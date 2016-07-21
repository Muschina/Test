export function changeTopIsEmpty(value) {
	return {
		type: 'TOP_IS_EMPTY',
		payload: value
	}
}

export function changeBottomIsEmpty(value) {
	return {
		type: 'BOTTOM_IS_EMPTY',
		payload: value
	}
}

export function getTopError(value) {
	return {
		type: 'FORM_TOP_ERROR',
		payload: value
	}
}

export function getBottomError(value) {
	return {
		type: 'FORM_BOTTOM_ERROR',
		payload: value
	}
}