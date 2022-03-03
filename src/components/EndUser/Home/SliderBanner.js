import React from 'react'
import Slider from "react-slick";
import ProductImg from '../../../assets/images/t-shirt.jpg'
import IonIcon from "@reacticons/ionicons";

function SliderBanner() {

    function SamplePrevArrow(props){
        const {  onClick } = props;
        return (
            <IonIcon 
                name="chevron-back-outline" 
                onClick={onClick}
                style={{ position: 'absolute',  top: '50%', left: '-50px',  fontSize: '25px', cursor: 'pointer' }}
            />
        );
    }

    function SampleNextArrow(props){
        const {  onClick } = props;
        return (
            <IonIcon 
                name="chevron-forward-outline" 
                onClick={onClick}
                style={{ position: 'absolute', top: '50%', right: '-50px', fontSize: '25px', cursor: 'pointer'}}
            />
        );
    }


    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider-banner">
            <Slider {...settings} className="slider-banner-list">
            <div className="slider-banner-item">
                <div className="slider-item-left">
                    <div style={{color : 'red'}}>Limited Edition</div>
                    <h1 style={{fontSize : 25}}>IKEA Minimalist Otoman</h1>
                    <p style={{ color : '#BDCCC7'}}>Discount</p>
                    <div className="slider-banner-sales">
                        <h2>30% Off</h2>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="slider-banner-img">
                    <img src={ProductImg} alt="banner" />
                </div>
            </div>
            <div className="slider-banner-item">
                <div className="slider-item-left">
                    <div style={{color : 'red'}}>Limited Edition</div>
                    <h1 style={{fontSize : 25}}>IKEA Minimalist Otoman</h1>
                    <p style={{ color : '#BDCCC7'}}>Discount</p>
                    <div className="slider-banner-sales">
                        <h2>30% Off</h2>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="slider-banner-img">
                    <img src={ProductImg} alt="banner" />
                </div>

            </div>
            </Slider>
            
        </div>
    )
}

export default SliderBanner
