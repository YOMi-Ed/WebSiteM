import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();


    const removeFromBasket = () => {
        dispatch( {
            type: 'REMOVE_FROM_BASKET',
            id: id,


        })
    }

    return(
        <div className="checkoutProduct">
            <img className="CheckoutProduct_image" src={image} alt=""/>
        
            <div className="checkoutProduct_info">
                <p className="CheckoutProduct_title">
                    {title}
                </p>
                <p className="CheckoutProduct_price">
                    <small>₩</small>
                    <strong>{ price }</strong> {/* strong은 강조한다는 의미 */}
                    <small>원</small> 
                </p>

                <div className='product_rating'>
                    {
                        Array(rating)
                        .fill()
                        .map(() => (

                            <p>★</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
            </div>
        </div>  
    );
}

export default CheckoutProduct;