import {motion, AnimatePresence} from 'framer-motion'
import {useAppContext} from '../context/AppContext'
import {Rings} from 'svg-loaders-react'

export const Loader = () => {
  const {loading} = useAppContext()

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={'loader'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="loader">
          <Rings width="80" height="80"></Rings>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
