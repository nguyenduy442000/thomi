import React from 'react'
import TitleHomeList from '../../Child/TitleHomeList'
import CategoryItem from './CategoryItem'
import Icon from '../../../assets/icon/category_icon.png'

function Category({title}) {
    return (
        <div className="list-category">
            <TitleHomeList title={title} />
            <div className="list-category-home">
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
                <CategoryItem icon={Icon} title="Computers & Video Games"/>
            </div>
        </div>
    )
}

export default Category
