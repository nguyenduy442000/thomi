import React from 'react'
import { Link } from "react-router-dom";
import Banner from '../../../assets/images/banner_merrychristmas.jpg'

function Sell() {
    return (
        <div className="list-sell">
            <div className="list-sell-left">
                <h3>Start to sell on Dakoli</h3>
                <Link to="">Apply Now</Link>
            </div>
            <img src={Banner} alt="banner" />
        </div>
    )
}

export default Sell
