import React from 'react'
import SliderBanner from './SliderBanner'
import Brand from './Brand'
import ListSixProduct from './ListSixProduct'
import ListFourProduct from './ListFourProduct'
import FourProductSpecial from './FourProductSpecial'
import OneProductSpecial from './OneProductSpecial'
import SliderProduct from './SliderProduct'
import Category from './Category'
import TopCategory from './TopCategory'
import Support from './Support'
import Sell from './Sell'

function index() {
    return (
        <div className="home">
            <div className="home-sliderbanner">
                <SliderBanner />
            </div>
            <div className="home-brand">
                <Brand color="#BEEBE1"/>
                <Brand color="#E0F0CC"/>
                <Brand color="#F9F3F3"/>
            </div>
            <div className="home-product">
                <ListSixProduct title="Top trending"/>
                <ListFourProduct title="Season Idea"/>
            </div>
            <div className="home-slider">
                <SliderProduct title="Customize Products"/>
            </div>
            <div className="home-special">
                <div className="home-special-item">
                    <FourProductSpecial title="Maybe You Will Like"/>
                </div>
                <div className="home-special-item">
                    <FourProductSpecial title="Home & Kitchen gifts"/>
                </div>
                <div className="home-special-item">
                    <FourProductSpecial title="Christmas decorations"/>
                </div>
                <div className="home-special-item">
                    <OneProductSpecial title="Deals on Top Brands"/>
                </div>             
            </div>
            <div className="home-slider">
                <SliderProduct title="Products you viewed"/>
            </div>
            <div className="home-product">
                <ListFourProduct title="Textile"/>
                <ListSixProduct title="Agriculture"/>
            </div>
            <div className="home-category">
                <Category title="Product Category"/>
            </div>
            <div className="home-topcate">
                <TopCategory title="Top Category For You"/>
            </div>
            <div className="home-special-two">
                <div className="home-special-two-item">
                    <OneProductSpecial title="Top Beauty"/>
                </div> 
                <div className="home-special-two-item">
                    <FourProductSpecial title="Gift for her"/>
                </div>
                <div className="home-special-two-item">
                    <FourProductSpecial title="Gift for him"/>
                </div>
            </div>
            <div className="home-slider">
                <SliderProduct title="Recommended for you today"/>
            </div>
            <div className="home-slider">
                <SliderProduct title="Products you viewed"/>
            </div>
            <div className="home-support">
                <Support />
            </div>
            <div className="home-sell">
                <Sell />
            </div>
        </div>
    )
}

export default index
