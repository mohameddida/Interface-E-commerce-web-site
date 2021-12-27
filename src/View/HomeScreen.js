import React from 'react'
import CardsProduit from '../Components/Card.js/CardsProduit'
import StepperCards from '../Components/StepperCards/StepperCards'

const HomeScreen = () => {
    return (
        <div>
            <header className="bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-left text-white">ShoppyHne</h1>
                </div>
            </header>
            <main className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <StepperCards className="rounded-lg border-4 border-dashed border-rounded"/>
                    </div>
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <CardsProduit className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}

export default HomeScreen
