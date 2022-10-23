import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch ({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p> { title } </p>
                <p className="product_price">
                    <small> 가격 </small>
                    <strong> { price } </strong>
                    <small> 원 </small>
                </p>
                <div className="product_rating">
                    {Array(rating) /* rating크기만큼의 배열을 만듦 */
                        .fill() /* fill메소드에 매개변수가 정의되어 있으면 정의된대로 하는데 정의 안되어 있으면 undefined된다*/
                        .map(() => ( //소수 넣으면 오류가 발생한다.
                            <p>★</p>
                        ))}
                    
                </div>
            </div>

            <img src={ image } alt=""/>
            <button onClick={addToBasket}> 장바구니에 담기 </button>

        </div>
    );
}

export default Product; // 이거 안쓰면 연동이 안됨
