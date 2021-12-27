import React, { useState } from 'react'
import ButtonList from './ButtonList';

const SettingLink = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="ml-3 relative">
            <div >
                <button type="button" onClick={() => setMenu(!menu)} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" >
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
            {menu &&
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <ButtonList name="Your Profile" pages="/Profile" />
                    <ButtonList name="Settings" pages="/Setting" />
                    <ButtonList name="Sign out" pages="/" />
                </div>}
        </div>

    )
}

export default SettingLink
