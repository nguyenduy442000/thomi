import React from 'react'
import SeeMore from '../../Child/SeeMore'
import TitleHomeList from '../../Child/TitleHomeList'
import ProductImg from '../../../assets/images/t-shirt.jpg'

function ListSixProduct({title}) {
    return (
        <div className="list-six">
            <TitleHomeList title={title}/>
            <div className="list-six-product">
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
                <div className="six-product-item">
                    <img src={ProductImg} alt="product" />
                    <p>Ciate Palemore Lipstick</p>
                </div>
            </div>
            <SeeMore />
        </div>
    )
}

export default ListSixProduct
