const initialState = {
	formVisible: false
}

export default function newDominoFormShow(state = initialState, action) {
	switch(action.type) {
		case 'SHOW_FORM': 
			return {...state, formVisible: action.payload}
		default: 
		return state;
	}
}