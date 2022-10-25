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
                console.log(state)
                console.log(action)
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id // basketItem.id 와 action.id 가 동일하면 첫 번째에 있는 인덱스 값을 보내준다.
                );

                let newBasket = [...state.basket]; //splice는 원본을 제거하기 때문에 하나 생성해준다.

                if(index >= 0){
                    newBasket.splice(index, 1) //splice(제거를 시작할 인덱스. 몇 개를 제거할 것인가)
                } else {
                    console.warn(
                        '(id' + action.id +') 이 장바구니에 존재하지 않습니다.'
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }
        default :
            return state;

    
    }
};

export default reducer;