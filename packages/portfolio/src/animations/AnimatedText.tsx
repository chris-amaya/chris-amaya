import React from 'react'
import {motion} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
}

const transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
  delay: 0.6,
}

export const AnimatedText: React.FunctionComponent = ({children}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}>
      {children}
    </motion.div>
  )
}

export default AnimatedText
