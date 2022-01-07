import React from 'react'
import {motion} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
}

export const AnimatedPage: React.FunctionComponent = ({children}) => {
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

export default AnimatedPage
