import { AssignmentLateTwoTone } from "@material-ui/icons";

export const initialState = {
    basket: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item],
                // ...spread syntax 즉, 예를들어 배열에서 괄호 없애고 내용물만 가져온다는 의미.
            };
        default :
            return state;

    
    }
}

export default reducer;