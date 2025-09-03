import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices'
    },
    {
      icon: FaPalette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces with attention to detail'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user experience'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts clearly'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container-width"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-400">
              Passionate Developer & Designer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a software developer who graduated in 2025 from Narasaraopeta Engineering College. 
              I'm proficient in Core Java, Python, SQL, and web technologies like React.js. I have a 
              passion for creating innovative solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My projects range from e-commerce applications to AI-powered assistive technology for 
              gesture recognition. I believe in using technology for social good and am continuously 
              learning new skills to build impactful applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-700 px-4 py-2 rounded-lg">
                <span className="text-primary-400 font-semibold">2025</span>
                <span className="text-gray-300 ml-2">Graduate</span>
              </div>
              <div className="bg-dark-700 px-4 py-2 rounded-lg">
                <span className="text-primary-400 font-semibold">3+</span>
                <span className="text-gray-300 ml-2">Projects Completed</span>
              </div>
              <div className="bg-dark-700 px-4 py-2 rounded-lg">
                <span className="text-primary-400 font-semibold">Team Lead</span>
                <span className="text-gray-300 ml-2">Experience</span>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-primary-400 mb-4">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-primary-500">
                  <p className="text-white font-medium">Java Programming</p>
                  <p className="text-gray-400 text-sm">HackerRank</p>
                </div>
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-white font-medium">SQL Programming</p>
                  <p className="text-gray-400 text-sm">HackerRank</p>
                </div>
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-blue-500">
                  <p className="text-white font-medium">Data Analytics with Python</p>
                  <p className="text-gray-400 text-sm">NPTEL</p>
                </div>
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-purple-500">
                  <p className="text-white font-medium">Machine Learning with Python</p>
                  <p className="text-gray-400 text-sm">IBM</p>
                </div>
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-white font-medium">NLP Introduction</p>
                  <p className="text-gray-400 text-sm">Infosys Springboard</p>
                </div>
                <div className="bg-dark-700/50 px-4 py-3 rounded-lg border-l-4 border-red-500">
                  <p className="text-white font-medium">NSS Volunteer Certificate</p>
                  <p className="text-gray-400 text-sm">JNTUK Kakinada University</p>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-primary-400 mb-4">Achievements & Activities</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Won <span className="text-primary-400 font-semibold">1st Prize</span> in Essay Writing on "Women Employment"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Certified as <span className="text-primary-400 font-semibold">NSS Volunteer</span> from JNTUK Kakinada University</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Participated in workshops (CRT, Seminars, Tech Events)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><span className="text-primary-400 font-semibold">Team Lead</span> in various projects demonstrating leadership and collaboration skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-3xl text-primary-400 mb-4 flex justify-center">
                  <feature.icon />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
