import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs } from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Palnadu Natural Spices E-Commerce',
      description: 'A React.js e-commerce site for spice products featuring home page, product catalog, and shopping cart functionality.',
      image: '/project1-mirchi.jpg',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'React Router', icon: FaReact, color: 'text-blue-500' },
        { name: 'HTML/CSS', icon: FaReact, color: 'text-orange-500' },
        { name: 'Vercel', icon: SiNextdotjs, color: 'text-white' }
      ],
      category: 'frontend',
      github: 'https://github.com/RamyaKata18',
      live: 'https://mirchi-website-fl4i.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Hand Gesture Recognition',
      description: 'Real-time hand gesture recognition system using OpenCV and MediaPipe for assistive communication.',
      image: '/project2-gesture.jpg',
      technologies: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
        { name: 'OpenCV', icon: FaPython, color: 'text-green-500' },
        { name: 'MediaPipe', icon: FaPython, color: 'text-blue-500' },
        { name: 'NumPy', icon: FaPython, color: 'text-purple-500' }
      ],
      category: 'ai',
      github: 'https://github.com/RamyaKata18',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Forest Fire Detection System',
      description: 'Deep learning framework using CNN models (VGG16, InceptionV3, Xception) for early fire and smoke detection with 94% accuracy.',
      image: '/project3-fire.jpg',
      technologies: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
        { name: 'TensorFlow', icon: FaPython, color: 'text-orange-500' },
        { name: 'CNN/VGG16', icon: FaPython, color: 'text-blue-500' },
        { name: 'InceptionV3', icon: FaPython, color: 'text-green-500' }
      ],
      category: 'ai',
      github: 'https://github.com/RamyaKata18',
      live: '#',
      featured: true
    }
  ]

  const categories = [
    { name: 'all', label: 'All Projects' },
    { name: 'frontend', label: 'Frontend' },
    { name: 'ai', label: 'AI/ML' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container-width"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.name)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === category.name
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-dark-800/80 p-3 rounded-full text-white hover:text-primary-400 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-dark-800/80 p-3 rounded-full text-white hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1 bg-dark-700 px-3 py-1 rounded-full text-sm"
                    >
                      <tech.icon className={`${tech.color}`} />
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/RamyaKata18"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
