import React, { useState } from 'react'
import { data, priceRange } from '../data/data'

import { motion } from 'framer-motion'

const Food = () => {
    
    const [foods, setFoods] = useState(data)
    // Filter Type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

     // Filter Price
     const filterPrice = (price) => {
        priceRange.filter((_item) => {
            if(_item.name === price){
                setFoods(
                    data.filter((item) => {
                        return item.price >= _item.startprice 
                            && item.price <= _item.lastprice;
                    })
                )
            }
            
        })
        
    }

    return (
        <motion.div
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition:{ duration: 0.1 }}}
    >
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={() => filterType('Burger')} className='m-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>Burger</button>
                        <button onClick={() => filterType('Pasta')} className='m-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>Pasta</button>
                        <button onClick={() => filterType('Pizza')} className='m-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>Pizza</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[450px] w-full'>
                        <button onClick={() => setFoods(data)} className='mx-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={() => filterPrice('20 to 100')} className='mx-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>20 to 100</button>
                        <button onClick={() => filterPrice('100 to 200')} className='mx-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>100 to 200</button>
                        <button onClick={() => filterPrice('300 to 500')} className='mx-1 border-orange-600 bg-orang-600 hover:bg-orange-500 hover:text-white'>300 to 500</button>
                    </div>

                </div>
            </div>
            {/* Display Array of Foods */}

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300' >
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />

                        <div className='flex justify-between px-2 py-4 items-center'>
                            <p className='font-bold text-[12px] sm:text-lg lg:text-xl'>{item.name}</p>
                            <p className='bg-orange-500 text-white p-1 rounded-full ml-1 text-[10px] sm:text-base lg:text-xl'>
                                <span className='bg-orage-500 text-white p-1 text-[10px] sm:text-base lg:text-xl'>{item.price}</span> 
                            </p>
                        </div>

                    </div>

                ))}

            </div>
        </div>
        </motion.div>
    )
}

export default Food