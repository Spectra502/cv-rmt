import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'


const Tech = () => {
  return (
    <div
      className='flex flex-col items-centered justify-center
      gap-10'
    >
      
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies used for this project</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        
        {technologies.map((technology) => (
          <motion.div key={technology.name}>
            <div
                className='w-28 h-28'
            >
              <BallCanvas icon={technology.icon} />
              <div className='flex flex-row flex-wrap justify-center
              gap-10'>
                <p className={styles.sectionSubText}>{technology.name}</p>
              </div>
            </div>
          </motion.div>      
        ))}
      </div>
      
      
    </div>
  )
}

export default SectionWrapper(Tech, '');