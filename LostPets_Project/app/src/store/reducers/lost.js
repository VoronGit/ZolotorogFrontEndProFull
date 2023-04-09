import { CHANGE_PATH } from "../../store/actions/lost";

const initialState = {
    path: [{ name: "Головна", link: "/" }, { name: "", link: "" }]
}

export default function toDoReducers(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PATH: {
            const newState = {
                path: action.payload.path
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}