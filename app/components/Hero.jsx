"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Hero() {
  return (
    <section  className="container items-center place-self-center py-28 grid grid-cols-1 md:grid-cols-2">
      <motion.div initial={{opacity : 0, scale:0.5}} animate = {{opacity : 1,scale:1}} transition={{duration:0.5}}>
      <h1 className='text-4xl lg:text-6xl py-4'>Hello,I&apos;m {" "}
      <span className='py-4'><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mohammed',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Abdul Razzack',
        1000,
        'a Software Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></span></h1>
      <p className='text-[#ADB7BE] text-lg lg:text-xl py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestias aspernatur! Facere facilis omnis qui nulla aliquam quibusdam incidunt doloribus delectus earum quasi id consequatur architecto debitis, deleniti sapiente officiis quod quam.</p>
      </motion.div>
      <motion.div initial={{opacity : 0, scale:0.5,y:100}} animate = {{opacity : 1,scale:1,y:0}} transition={{duration:1}} className='flex items-center justify-end pr-0'>
      <Image src="/images/doflamingo.jpg" alt='error' className='rounded-full' width={300} height={300}/>
      </motion.div>
    </section>
  )
}

export default Hero
