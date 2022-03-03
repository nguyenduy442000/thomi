import SeeMore from '../../Child/SeeMore'
import React from 'react'
import TitleHomeList from '../../Child/TitleHomeList'
import ProductImg from '../../../assets/images/t-shirt.jpg'

function OneProductSpecial({title}) {
    return (
        <div className="one-special">
            <TitleHomeList title={title}/>
            <div className="one-special-list">
                <div className="one-special-img">
                    <img src={ProductImg} alt="product" />
                </div>
            </div>
            <SeeMore />
        </div>
    )
}

export default OneProductSpecial
