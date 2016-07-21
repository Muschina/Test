const initialState = {
	topIsEmpty: true,
	bottomIsEmpty: true,
	formTopError: false,
	formBottomError: false
}

export default function newDominoFormValidate(state = initialState, action) {
	switch(action.type) {
		case 'TOP_IS_EMPTY':
			return {...state, topIsEmpty: action.payload}
		case 'BOTTOM_IS_EMPTY':
			return {...state, bottomIsEmpty: action.payload}
		case 'FORM_TOP_ERROR':
			return {...state, formTopError: action.payload}
		case 'FORM_BOTTOM_ERROR':
			return {...state, formBottomError: action.payload}

		default: 
			return state;
	}
}