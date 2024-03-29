import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-20 rounded-tl-3xl rounded-trcls-3xl bg-[#004D43] overflow-hidden'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1  initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[16vw] leading-none font-["Test Founders_Grotesk X-Cond SmBd"] uppercase pt-10 mb-12 font-bold pr-20 '>
               LAVDYA 
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[16vw] leading-none font-["Test Founders_Grotesk X-Cond SmBd"] uppercase pt-10 mb-12 font-bold pr-20 '>
                LAVDYA
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[16vw] leading-none font-["Test Founders_Grotesk X-Cond SmBd"] uppercase pt-10 mb-12 font-bold pr-20 '>
                LAVDYA
            </motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee
