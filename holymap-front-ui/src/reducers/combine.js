import {combineReducers} from 'redux'
import {popupReducer} from './popup_reducers'
import {categoryReducer} from "./category_reducer";
const reducers = combineReducers({
    popupState: popupReducer,
    categoryState: categoryReducer
    // тут потом будет добавлены редюсеры для других стейтов
});

export default reducers;