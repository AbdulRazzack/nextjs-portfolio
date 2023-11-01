"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectSection from './components/ProjectSection'
import { motion } from 'framer-motion'
import LastSegment from './components/LastSegment'


export default function Home() {
  return (
    <motion.main initial={{opacity : 0}} animate = {{opacity : 1}} transition={{duration:1}} className="container px-8">
      <Navbar />
        <Hero/>
        <About/>
        <ProjectSection/>

      <LastSegment/>
    </motion.main>
  )
}
