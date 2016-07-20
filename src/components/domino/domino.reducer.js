const initialState = {
	topValue: 1,
	bottomValue: 4
}

export default function dominoChangeValue(state = initialState, action) {
	switch(action.type) {
		case 'CHANGE_TOP_VALUE':
			return {...state, topValue: action.payload}
		case 'CHANGE_BOTTOM_VALUE':
			return {...state, bottomValue: action.payload}
		default:
			return state;
	}
}