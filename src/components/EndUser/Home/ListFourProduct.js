import React from 'react'
import SeeMore from '../../Child/SeeMore'
import TitleHomeList from '../../Child/TitleHomeList'
import ProductImg from '../../../assets/images/t-shirt.jpg'

function ListFourProduct({title}) {
    return (
        <div className="list-four">
            <TitleHomeList title={title}/>
            <div className="list-four-product">
                <div className="four-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="four-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="four-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="four-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
            </div>
            <SeeMore />
        </div>
    )
}

export default ListFourProduct

