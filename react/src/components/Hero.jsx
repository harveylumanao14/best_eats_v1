import React, { useState, useEffect } from 'react'
import { carousel } from '../data/data'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import { motion } from 'framer-motion'
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevCounter => {
                if (prevCounter === carousel.length - 1)
                    return 0;
                else
                    return prevCounter + 1
            })
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carousel.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === carousel.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (

        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
            className='max-w-[1640px] mx-auto p-4'> {/* max-w-[1640px] */}
            <div className='max-h-[500px] relative group'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500] bg-black/75 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'> Best </span> </h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods </span> Delivered</h1>
                </div>
                {/* <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='/' /> */}
                <div style={{ backgroundImage: `url(${carousel[currentIndex].image})` }} className='w-full h-[500px] rounded-2xl bg-center bg-cover duration-500 object-cover'>
                </div>

                {/*  LEFT ARROW */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/*  LEFT ARROW */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='flex top-4 justify-center py-2'>
                    {carousel.map((item, index) => (
                        <div key={index} className='text-3xl cursor-pointer'>
                            <RxDotFilled onClick={() => goToSlide(index)} />
                        </div>
                    ))}
                </div>

            </div>

        </motion.div>


    )
}

export default Hero