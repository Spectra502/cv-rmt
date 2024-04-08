import React from 'react'
//import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Armed with a robust technical toolkit and a creative mindset, 
        I thrive on transforming complex challenges into elegant, efficient solutions. 
        Each project is a step towards a brighter, smarter future. Dive into my portfolio 
        and discover how my mechatronics expertise can bring a surge of energy to the world 
        of engineering!
      </motion.p>
    </>
  )
}

export default About