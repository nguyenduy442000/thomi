import React from 'react'

function CategoryItem({icon, title}) {
    return (
        <div className="list-category-item">
            <img src={icon} alt="category icon" />
            <p>{title}</p>
        </div>
    )
}

export default CategoryItem
