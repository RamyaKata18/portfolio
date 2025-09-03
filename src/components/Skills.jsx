import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaFigma 
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiRedis, SiGraphql, SiFirebase 
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Core Java', icon: FaJs, level: 80, color: 'text-red-500' },
        { name: 'Python', icon: FaPython, level: 70, color: 'text-yellow-500' },
        { name: 'JavaScript', icon: FaJs, level: 60, color: 'text-yellow-400' },
        { name: 'SQL', icon: FaJs, level: 70, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React.js', icon: FaReact, level: 60, color: 'text-blue-400' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-blue-600' },
        { name: 'React Router', icon: FaReact, level: 60, color: 'text-blue-500' },
      ]
    },
    {
      title: 'AI/ML & Tools',
      skills: [
        { name: 'Python (AI/ML)', icon: FaPython, level: 50, color: 'text-yellow-500' },
        { name: 'TensorFlow (Basic)', icon: FaPython, level: 50, color: 'text-orange-500' },
        { name: 'OpenCV (Basic)', icon: FaPython, level: 50, color: 'text-green-500' },
        { name: 'MediaPipe (Basic)', icon: FaPython, level: 50, color: 'text-purple-500' },
        { name: 'Git/GitHub', icon: FaGitAlt, level: 75, color: 'text-orange-600' },
        { name: 'Kaggle Datasets', icon: FaAws, level: 70, color: 'text-cyan-400' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container-width"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="flex items-center justify-between mb-3"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`text-2xl ${skill.color}`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary-400">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.flat().map((category) => 
              category.skills.slice(0, 3).map((skill, index) => (
                <div key={`${category.title}-${skill.name}`} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium flex items-center gap-2">
                      <skill.icon className={`${skill.color}`} />
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                      className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
