import React from 'react'
import { Button } from '~/components/ui/button'
import TextWrapper from '~/components/ui/TextWrapper'
import Image from 'next/image'
import productImage from '~/assets/product-image.png'
import { ContainerScroll } from '~/components/ui/Container-Scroll-Animation'
const Hero = () => {
  return (
      <div className='container '>

      
      <ContainerScroll
        titleComponent={
                   <div className='flex mx-auto text-center   gap-8 flex-col justify-center  items-center'>
        <TextWrapper text='Generative Business Intelligence for Analysts' />
        
        <div className='max-w-[860px]  flex gap-6 flex-col'>
          <h1 className='text-[48px] font-bold text-center leading-[55px] text-[#1C1F25]'>Revolutionizing Business Decisions with AI-Powered Analytics</h1>
          <h4 className='text-base text-center mx-auto max-w-[660px]  leading-6 font-normal text-sass-brown_black '>Harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success</h4>
                                <div className='flex gap-3 mx-auto items-center'>
                                    <Button className="border border-sass-blue rounded-md px-6 text-sass-blue">
              Get Started ! 
            </Button>
            <Button className="bg-sass-blue rounded-md px-6 text-white">
              Login
            </Button>
  </div>
        </div>

    {/* <Image src={productImage} alt='product image' className='mt-10 w-[80%]' /> */}
      </div>
        }
      >
        <Image
          src={productImage}
          alt="hero"
         
          className="mx-auto w-[80%] rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

   
    </div>
  )
}

export default Hero