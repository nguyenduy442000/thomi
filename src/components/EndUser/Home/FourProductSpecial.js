import React from 'react'
import SeeMore from '../../Child/SeeMore'
import TitleHomeList from '../../Child/TitleHomeList'
import ProductImg from '../../../assets/images/t-shirt.jpg'

function FourProductSpecial({title}) {
    return (
        <div className="four-special">
            <TitleHomeList title={title}/>
            <div className="four-special-list">
                <div className="four-special-img">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="four-special-img">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="four-special-img">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="four-special-img">
                    <img src={ProductImg} alt="product" />
                </div>
            </div>
            <SeeMore />
        </div>
    )
}

export default FourProductSpecial
