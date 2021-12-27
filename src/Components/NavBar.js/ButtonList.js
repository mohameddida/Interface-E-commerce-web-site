import React from 'react'
import { Link } from 'react-router-dom'
const ButtonList = ({ name, pages }) => {
    return (
        <div >
            <Link to={pages}
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0" > {name} </Link>
        </div>
    )
}

export default ButtonList