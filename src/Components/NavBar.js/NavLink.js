import React from 'react'
import { Link } from 'react-router-dom'
const NavLink = ({ name, pages }) => {
    return (

        <Link to={pages} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"> {name} </Link>


    )
}

export default NavLink