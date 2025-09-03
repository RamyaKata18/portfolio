import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-width text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img 
              src="/profile-image.jpg" 
              alt="Kata Ramya" 
              className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-primary-500 to-purple-600"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text">Kata Ramya</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Aspiring Software Developer | Proficient in Core Java, Python, SQL & Web Technologies | 
          Passionate About <span className="text-primary-400">Problem-Solving</span>, 
          <span className="text-primary-400">Scalable Solutions</span> & Continuous Learning
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Hire Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Kata_Ramya_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mt-8"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/RamyaKata18', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kata-ramya-reddy-5b218a284', label: 'LinkedIn' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
