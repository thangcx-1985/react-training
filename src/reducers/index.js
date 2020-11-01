import {
  ON_CHANGE,
  ON_SUBMIT
} from '../actions';


export default function mainReducer(state, action) {
    switch (action.type) {
        case ON_CHANGE:
            if (state === undefined) {
                return Object.assign({}, state, Object.assign({}, state, {tempInfor: action.param}));
            }
            
            return Object.assign({}, state, {tempInfor: Object.assign({}, state.tempInfor, action.param)});
        case ON_SUBMIT:
            if (!('arrInfor' in state)) {
                state.arrInfor = [];
            }

            state.arrInfor.unshift(action.param);
            state = Object.assign({}, state, {isSubmit: true})

            return state;
        default:
            return state;
    }
}