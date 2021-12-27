import React from 'react'
import { Link } from 'react-router-dom'
function NavLinkFooter({pages,name}) {
    return (
        <div>
            
        <Link to={pages} className="text-blue-700  text-md hover:text-blue-500"
            aria-current="page"> {name} </Link>
        </div>
    )
}

export default NavLinkFooter
