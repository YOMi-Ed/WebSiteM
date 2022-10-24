import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {ShoppingBasket}  from '@material-ui/icons';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to ="/">
                <img className="header_logo"
                src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F52%2F8a%2Fe7%2F528ae75ee9ae1fc68649e4f35aa42df8.jpg&type=sc960_832" 
                />
            </Link>

            <div className="header_search">
            <input className="header_searchInput" type="text" /> 
            <SearchIcon className="header_searchIcon" />
            </div>


            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne"> 안녕하세요 ! </span>
                    <span className="header_optionLineTwo"> 로그인하기 ! </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne"> 돌아가기 </span>
                    <span className="header_optionLineTwo"> 주문내역 </span>
                </div>
                    
                <div className="header_option">
                    <span className="header_optionLineOne"> 반가워요 </span>
                    <span className="header_optionLineTwo"> 구독과좋아요 </span>
                </div>
                
                <Link to="checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="headeroptionLineTwoheader_basketCount">
                            {basket?.length} {/* 한 번더 검증해줌 undefined를 반환하지 않게 */}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
  );
}

export default Header;