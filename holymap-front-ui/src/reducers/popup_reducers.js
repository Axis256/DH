const initialState = {
    id: -1
};

export function popupReducer(state = initialState, action) {
    switch (action.type){
        case "FILL":
            return Object.assign({}, state, {id: action.id});
        case "CLEAR":
            return Object.assign({}, state, {id:-1});
    }
    return state;
}