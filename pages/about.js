import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I am Mariana Maricela Lozano! I am a Sophmore Computer Science Student studying at Texas A&M University - San Antonio. I have a passion for developing web 
          applications and learning of new ways of incorporating the tech industry into the fashion industry. I am planning on becoming a Software Engineer, and I am up to learning
            new skills and gaining further experience.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I love to travel, read,
          playing piano, work-out, and hanging with my dogs. I have a interest in photography too!
          
        </div>
      </motion.div>
    </Layout>
  )
}
