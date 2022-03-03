import React from 'react'
import IonIcon from "@reacticons/ionicons";
import flatUS from "../../assets/flat/flat_us.png"

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-left">
                    <div className="header-left-logo">:Dakoli</div>
                    <div className="header-left-navbar">
                        <div className="header-left-hambuger">
                            <IonIcon name="reorder-three-outline" style={{ fontSize: 25}}/>
                        </div>
                        <ul className="header-left-list">
                            <li className="header-left-item">All</li>
                            <li className="header-left-item">New Arrival</li>
                            <li className="header-left-item">Best Seller</li>
                            <li className="header-left-item">Agriculture</li>
                            <li className="header-left-item">Textile</li>
                            <li className="header-left-item">Customer Service</li>
                            <li className="header-left-item">Drop Shipping</li>
                        </ul>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-languages">
                        <p>Xin chào!</p>
                        <img src={flatUS} alt="flat" />
                    </div>
                    <div className="header-right-user">
                        <IonIcon name="person-outline" style={{ fontSize: 30, marginRight: "5px" }}/>
                        <div className="header-right-link">
                               <span onClick={event =>  window.location.href='/signup'}> Sign up</span>
                                <span onClick={event =>  window.location.href='/login'}>Login</span>
                        </div>
                    </div>
                    <div className="header-right-special">
                            <div>Special <span>0</span></div> 
                            <span>Customer</span>
                    </div>
                    <div className="header-right-messages">
                        My 
                        <span>Messages</span>
                    </div>
                    <div className="header-right-order">
                        Request 
                        <span>& Orders</span>
                    </div>
                    <div className="header-right-cart">
                        <IonIcon name="cart-outline" style={{ fontSize: 50 }}/>
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-search">
                    <div className="input-choose">
                        All Department <IonIcon name="chevron-down-outline" />
                    </div>
                    <input type="text" className="input-search" name="search" placeholder="I'm shopping for..."/>
                    <label className="input-label"><IonIcon name="search-outline" style={{ fontSize: 25, fontWeight: 'bold' }}/></label>
                </div>
            </div>
        </div>
    )
}

export default Header
