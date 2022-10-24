import { AssignmentLateTwoTone } from "@material-ui/icons";

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)
    // reduce메서드는 배열의 모든 요소에 대해서 지정된 콜백 함수로 호출하는 것.
    

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item],
                // ...spread syntax 즉, 예를들어 배열에서 괄호 없애고 내용물만 가져온다는 의미.
            };

            case 'REMOVE_FROM_BASKET' :
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );

                let newBasket = [...state.basket];

                if(index >= 0){
                    newBasket.splice(index, 1)
                } else {
                    console.warn(
                        '(id' + action.id +') 이 장바구니에 존재하지 않습니다.'
                    )
                }

                return {
                    ...state,
                }
        default :
            return state;

    
    }
};

export default reducer;