import React from 'react'
import TitleHomeList from '../../Child/TitleHomeList'
import Icon from '../../../assets/icon/category_icon.png'

function TopCategory({title}) {
    return (
        <div className="topcate-list">
            <TitleHomeList title={title}/>
            <div className="topcate-list-home">
                <div className="topcate-list-item">
                    <img src={Icon} alt="icon-topcate"/>
                    <p>All Deals</p>
                </div>  
                <div className="topcate-list-item">
                    <img src={Icon} alt="icon-topcate"/>
                    <p>All Deals</p>
                </div> 
                <div className="topcate-list-item">
                    <img src={Icon} alt="icon-topcate"/>
                    <p>All Deals</p>
                </div> 
                <div className="topcate-list-item">
                    <img src={Icon} alt="icon-topcate"/>
                    <p>All Deals</p>
                </div> 
                <div className="topcate-list-item">
                    <img src={Icon} alt="icon-topcate"/>
                    <p>All Deals</p>
                </div> 
            </div>
        </div>
    )
}

export default TopCategory
