import React from "react";
import logo from "../../assets/icons/anex_logo.svg"
import call from "../../assets/icons/call.svg";
import location from "../../assets/icons/location.svg";
import Button from "../Button/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header:React.FC<{openModal:any,openHeader:any}>=({openModal,openHeader})=>{
  
  
  return (
    <>
      <header className="header">
        <input type="checkbox" id="burger" hidden></input>
        <input type="checkbox" id="phone" hidden></input>
        <input type="checkbox" id="location" hidden></input>
        <input type="checkbox" id="request" hidden></input>
        <div className="header__container">
          <div className="header__main">
            <div className="header__logo-outer">
              <img className="header__logo" src={logo} alt="" />
            </div>
            <div className="header__nav-outer">
              <nav className="header__nav">
                <ul className="header__list">
                  <li className="header__list-item">
                    <Link className="header__list-item-link" to="/choose_tour">
                      ПОДБОР ТУРА
                    </Link>
                  </li>
                  <li className="header__list-item">
                    <Link className="header__list-item-link" to="/hot_tour">
                      ГОРЯЩИЕ ТУРЫ
                    </Link>
                  </li>
                  <li className="header__list-item header__list-item--delete">
                    <Link className="header__list-item-link" to="/countries">
                      СТРАНЫ
                    </Link>
                  </li>
                  <li className="header__list-item header__list-item--delete">
                    <Link className="header__list-item-link" to="/hotels">
                      ОТЕЛИ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__contact-outer">
            <label
            onClick={openModal}
                htmlFor="request"
                className="button-outer"
              >
              
                <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button>
              </label>

              <label
                htmlFor="phone"
                className="phone"
              ><img className="header__contact-image" src={call} alt="" /></label>

              <label
                htmlFor="location"
                className="location"
              >
              <img className="header__contact-image" src={location} alt="" /></label>

              <label
                htmlFor="burger"
                className="burger-menu burger-menu--mobile"
                onClick={openHeader}
              >
                <div className="burger-menu__container">
                  <div className="burger-menu__rect"></div>
                  <div className="burger-menu__rect"></div>
                  <div className="burger-menu__rect"></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="header__sub-phone">
          <div className="header__sub-phone-container">
            <p>+ 8 (495) 626-26-96</p>
            <p>+ 8 (925) 826-26-96</p>
          </div>
          
        </div>
        <div className="header__sub-location">
          <div className="header__sub-location-container">
            <p>Москва, Россошанский проезд, дом 3, (1-й этаж)</p>
          </div>
          
        </div>
       
       
       


        <div className="header__sub-menu">
          <div className="header__sub-menu-container">
            <div className="header__sub-menu-list-outer countries">
              <div className="header__sub-menu-list-container countries__container">
                <h3>ПОПУЛЯРНЫЕ СТРАНЫ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Египет
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      ОАЭ
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Куба
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Испания
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Италия
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__sub-menu-list-outer tourists">
              <div className="header__sub-menu-list-container tourists__container">
                <h3>ТУРИСТАМ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Страны
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Отели
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Подбор тура
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Горящие туры
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__sub-menu-list-outer companies">
              <div className="header__sub-menu-list-container companies__container">
                <h3>КОМПАНИЯМ</h3>
                <ul className="header__sub-menu-list">
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      О нас
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Отзывы
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Контакты
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Новости
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Priority
                    </Link>
                  </li>
                  <li className="header__sub-menu-item">
                    <Link className="header__sub-menu-item-link" to="/">
                      Агентам
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__contact-outer header__contact-outer--display-sub">
              <div className="header__contact-outer">
              <label
            onClick={openModal}
                htmlFor="request"
                className="button-outer button-outer--display-sub"
              >
              
                <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button>
              </label>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
