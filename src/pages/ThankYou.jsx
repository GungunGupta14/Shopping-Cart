import React from 'react'
import { NavLink } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div className='flex flex-col w-full h-[80vh] justify-center items-center'>
            <p className='text-3xl font-bold text-green-500'>THANK YOU FOR SHOPPING</p>
            <NavLink to="/">
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                SHOP MORE
                </button>
            </NavLink>
            
        </div>
    )
}

export default ThankYou
