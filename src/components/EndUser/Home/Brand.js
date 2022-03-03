import React from 'react'
import IonIcon from "@reacticons/ionicons";
import BrandLogo from '../../../assets/images/Harman_Kardon_Logo.svg.png'

function Brand({color}) {
    return (
        <div className="brand-child" style={{ backgroundColor: `${color}` }}>
            <img src={BrandLogo} alt="brand-img"/>
            <div className="brand-icon">
                <IonIcon name="chevron-forward-outline" style={{ fontSize: 25, color: '#296855' }}/>
            </div>
        </div>
    )
}

export default Brand
