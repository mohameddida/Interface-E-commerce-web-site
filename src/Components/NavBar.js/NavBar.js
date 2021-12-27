import React, { useState } from 'react'
import MobileNav from './MobileNav';
import NavLink from './NavLink';
import NotificationIcon from './NotificationIcon';
import SettingLink from './SettingLink';

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [list, setList] = useState(false);
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 items-center text-center justify-center">
                                <div className="bg-white h-9 w-9 items-center justify-center  rounded-full">
                                </div>
                            </div>

                            <div className="ml-3 items-center">
                                <h3 className="text-white text-lg">ShopyHne</h3>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink name="Home" pages="/Home" />
                                    <NavLink name="Laptops" pages="/Laptops" />
                                    <NavLink name="Phone" pages="/Phones" />
                                    <NavLink name="Accessoires" pages="/Accessoires" />
                                    <NavLink name="Contact" pages="/Contacts" />
                                </div>
                            </div>
                        </div>


                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <NotificationIcon />
                                <SettingLink />

                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            {/* <SearchBar className="text-right"/>*/}
                            <button type="button" onClick={() => setList(!list)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="false">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    {list && <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                        <MobileNav name="Home" pages="/Home" />
                        <MobileNav name="Laptops" pages="/Laptops" />
                        <MobileNav name="Phone" pages="/Phones" />
                        <MobileNav name="Accessoires" pages="/Accessoires" />
                        <MobileNav name="Contact" pages="/Contacts" />

                    </div>}
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">Mohamed Dida</div>
                                <div className="text-sm font-medium leading-none text-gray-400">Med@example.com</div>
                            </div>
                            <button type="button" onClick={() => setMenu(!menu)} className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                        {menu && <div classNameName="mt-3 px-2 space-y-1">
                            <MobileNav name="Your Profile" pages="/Profile" />
                            <MobileNav name="Settings" pages="/Setting" />
                            <MobileNav name="Sign out" pages="/" />
                        </div>
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
