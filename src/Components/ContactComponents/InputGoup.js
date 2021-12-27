import React from 'react'

const InputGoup = ({ title ,place , id ,type ,name ,htmlfor , autoComplete}) => {
    return (
        <div>

            <label htmlFor={htmlfor} className="block text-lg font-medium text-white">
                {title}
            </label>
            <input
                placeholder = {place}
                type={type}
                name={name}
                id={id}
                autoComplete={autoComplete}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 p-4 rounded-md"
            />
        </div>
    )
}

export default InputGoup
