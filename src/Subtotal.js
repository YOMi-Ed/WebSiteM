import React from 'react';
import './Subtotal.css';
import Currencyformat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="subtotal">

            <Currencyformat 
            renderText={(value) => ( //renderText는 뒤에 함수를 렌더링 해준다는 의미.
                <>
                <p>
                    총액 ({basket.length} items) : <strong> {value} 원</strong>
                </p>
                    <small className="subtotal_gift"> {/* <small>작은 글씨라는 의미 */}
                        <input type="checkbox" />체크박스입니다.
                    
                    </small>
                </>
            )}

            decimalScal={2} //소수점 몇 째 자리까지 보여줄거임.
            value={getBasketTotal(basket)} //값
            displayType={"text"} //형태
            thousandsSeparator={true} //천의자리마다 나눔.
            prefix={"₩"} //앞에 붙이는 것.
            />
            
            <button>결제하기</button>
        </div>
    );
}

export default Subtotal;