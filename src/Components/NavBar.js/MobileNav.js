import React from 'react'
import { Link } from 'react-router-dom'
const MobileNav = ({ name, pages }) => {
    return (
        <Link to={pages} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{name}</Link>

    )
}

export default MobileNav
