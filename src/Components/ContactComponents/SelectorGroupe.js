import React from 'react'

const SelectorGroupe = ({nom ,id, name , autoComplete ,htmlFor}) => {
    return (
        <div className="text-center">
            <label htmlFor={htmlFor} className="block  text-lg font-medium text-white">
                {nom}
            </label>
            <select
                id={id}
                name={name}
                autoComplete={autoComplete}
                className="mt-1 block w-full py-2 px-3 border rounded-md font-extrabold text-center text-gray-800 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
             
                    <option className="font-extrabold text-center">Choose your Region</option>
                    <option className="font-extrabold text-center">Tozeur</option>
                    <option className="font-extrabold text-center">Degech</option>
                    <option className="font-extrabold text-center">Nafta</option>
                    <option className="font-extrabold text-center">EL-hamma</option>
                    <option className="font-extrabold text-center">Tamoghza</option>
                    <option className="font-extrabold text-center">Hezwa</option>
               
            </select>
        </div>
    )
}

export default SelectorGroupe
