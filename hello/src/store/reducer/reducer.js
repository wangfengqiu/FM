
import { start, listid, success } from "../action/action";

var data = {
    list: [],
    shoucang: localStorage.getItem("token") || [],
    isLoading: false
}
if (!localStorage.getItem("token")) {
    localStorage.setItem("token", "[]")
}
function reducer(state = data, action) {
    switch (action.type) {
        case start:
            return { ...state, isLoading: true }
        case success:
            return { ...state, list: action.list, isLoading: false }
        case listid:
            if (state.shoucang.includes(action.list)) {
                return;
            } else {
                state.shoucang.push(action.list);
                localStorage.setItem("token", JSON.stringify(state.shoucang))
            }
            return { ...state, shoucang: [...state.shoucang] };
        default:
            return state
    }
}
export default reducer;