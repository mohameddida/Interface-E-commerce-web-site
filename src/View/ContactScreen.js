import React from 'react'
import InputGoup from '../Components/ContactComponents/InputGoup'
import SelectorGroupe from '../Components/ContactComponents/SelectorGroupe'

const ContactScreen = () => {
    return (
        <div className="bg-gray-900 sm:bg-gray-900">
            <div className="mt-10 sm:mt-0 bg-gray-900 ">
                <div className="md:grid md:grid-cols-3 md:gap-6 bg-gray-900 text-white">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className=" leading-6 text-5xl my-8 font-extrabold">Contact Us</h3>
                            <p className="mt-3 text-sm ">you can ask about anything you want about our shop.</p>
                            <div className=" text-center md:mx-10 sm:mx-5 md:my-4 sm:my-4">
                                <h1 className=" leading-6 text-5xl my-8 font-extrabold">ShoppyHne</h1>
                            </div>
                        </div>

                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md text-center text-gray-800">
                                <div className="px-4 py-5 bg-gray-800 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <InputGoup title="First Name" htmlfor="first-name" place="Your first Name" id="first-name" type="text" name="first-name" autoComplete="given-name" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">

                                            <InputGoup title="Last Name" htmlfor="last-name" place="Your Last Name" id="last-Name" type="text" name="last-name" autoComplete="given-name" />

                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <InputGoup title="Email address" htmlfor="email" place="exemple@exemple.com" id="last-Name" type="text" name="email-address" autoComplete="email" />

                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <SelectorGroupe nom="Region" htmlFor="country" id="country"
                                                name="country"
                                                autoComplete="country" />

                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <InputGoup title="City" htmlfor="city" place="Name your city" id="city" type="text" name="city" autoComplete="city" />

                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <InputGoup title="State / Province" htmlfor="state" place="Your State" type="text"
                                                name="state" id="state" autoComplete="state" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">

                                            <InputGoup title="ZIP / Postal" htmlfor="postal" place="0000" id="postal-code" type="text" name="postal-code" autoComplete="postal-code" />

                                        </div>
                                    </div>
                                    <div className="col-span-6">

                                        <InputGoup title="message" htmlfor="street-address" place="send your message here ..." id="street-address" type="text" name="street-address" autoComplete="street-address" />

                                    </div>

                                </div>
                                <div className="px-4 py-3 bg-gray-800 text-center w-full sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen
