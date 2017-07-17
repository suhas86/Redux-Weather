import { FETCH_WEATHER } from '../actions/index'
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
           // return state.concat( [action.payload.data]);
           //Equivalent to concat in ES6
            return [action.payload.data, ...state];
            break;
    }
    return state;
}