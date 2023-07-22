import React from 'react'

const HeadlineCards = () => {
    return (
        
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'> {/* max-w-[1640px] */}
            {/* Card */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                 {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>  
                    <p className='font-bold text-2xl px-2 pt-4'> Suns's out Bogo's Out</p>
                    <p className='px-2'> through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                 {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'> New Restaurants </p>
                    <p className='px-2'> Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                 {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'> We Deliver Deserts Too</p>
                    <p className='px-2'> Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='/' />
            </div>
        </div>
    )
}

export default HeadlineCards