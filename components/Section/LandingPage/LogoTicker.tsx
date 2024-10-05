'use client'

import Image from 'next/image';
import { motion } from "framer-motion"
import Logo from '~/assets/Icons/Logo';
import Logo1 from '~/assets/Icons/Logo1';
import Logo2 from '~/assets/Icons/Logo2';
import Logo3 from '~/assets/Icons/Logo3';
import Logo4 from '~/assets/Icons/Logo4';
import Logo5 from '~/assets/Icons/Logo5';
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12  bg-white">
      <div className="container">
        <div className=" flex flex-col gap-6 justify-center items-center mx-auto max-w-[1000px]  ">
          <h1 className='font-normal  text-base leading-6 text-sass-brown_black'>160,000+ customers in over 120 countries grow their businesses with Neuros</h1>
          <motion.div 
  
          className="grid grid-cols-2 md:grid-cols-4 gap-8  ">
            <Logo1 />
            <Logo2 />
            <Logo3 />
            <Logo4 />
            <Logo5 />
            <Logo3 />
            <Logo4 />
            <Logo5 />
       
          </motion.div>

        </div>
  
      </div>

    </div>
  )
};
