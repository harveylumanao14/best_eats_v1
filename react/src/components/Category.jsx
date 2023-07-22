import React from 'react'
import { category } from '../data/data'

import { motion } from 'framer-motion'

const Category = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className='max-w-[1640px] m-auto px-4 py-12'>
                <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
                {/* Categories */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                    {category.map((item, index) => (
                        <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 cursor-pointer'>
                            <h2 className='font-bold sm:text-xl'> {item.name} </h2>
                            <img className='w-20' src={item.image} alt='/' />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Category