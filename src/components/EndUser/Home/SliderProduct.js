import React from 'react'
import Slider from "react-slick";
import TitleHomeList from '../../Child/TitleHomeList'
import ProductImg from '../../../assets/images/t-shirt.jpg'

function SliderProduct({title}) {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 7,
      slidesToScroll: 1
    };

    return (
        <div className="slider-product">
            <TitleHomeList title={title} />
            <Slider {...settings} className="slider-product-list">
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
                <div className="slider-product-item">
                    <img src={ProductImg} alt="product" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderProduct
