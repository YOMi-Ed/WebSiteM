import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
        <img className="header_logo" src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F52%2F8a%2Fe7%2F528ae75ee9ae1fc68649e4f35aa42df8.jpg&type=sc960_832" />
    
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

            <div className="header_optionBasket">
                <ShoppingBasket />
                <span className="headeroptionLineTwoheader_basketCount">
                    0
                </span>
            </div>

        </div>
    </div>
  )
}

export default Header;