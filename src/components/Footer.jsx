import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RamyaKata18', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kata-ramya-reddy-5b218a284', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-width py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful and functional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Kata Ramya</p>
              <p>kataramya2912004@gmail.com</p>
              <p>+91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-dark-700">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Your Name. Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
