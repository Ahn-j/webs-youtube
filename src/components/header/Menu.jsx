import React from 'react'
import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();
    console.log("ffff : ", location)
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, index)=>(
                    <li key={index} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword,index)=>(
                    <li key={index} className={location.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;
