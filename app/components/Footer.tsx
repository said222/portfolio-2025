'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { key: 'home', href: '#home' },
              { key: 'about', href: '#about' },
              { key: 'skills', href: '#skills' },
              { key: 'projects', href: '#projects' },
              { key: 'contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {nav(item.key)}
              </a>
            ))}
          </motion.nav>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-gray-400"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© 2024 John Doe. {t('rights')}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer