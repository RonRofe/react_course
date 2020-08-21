import * as actionTypes from './actions';

const initialState = {
    persons: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                persons: [
                    ...state.persons,
                    action.payload,
                ],
            };
        case actionTypes.DELETE: 
            return {
                ...state,
                persons: state.persons.filter((person) => person.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;