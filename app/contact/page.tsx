'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-10">We’re here to help. Reach out to us for any assistance or inquiries.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-xl"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input type="name" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input type="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Message</label>
              <textarea className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition-all">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-6 bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>195 Patel Marg, Ghaziabad, Uttar Pradesh, 201001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 (955) 561-3171</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>amitxp1001@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden mt-6 shadow-xl">
            <iframe
              className="w-full h-60 border-0"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Pharmacy"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
