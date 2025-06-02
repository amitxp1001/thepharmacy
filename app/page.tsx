'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
 const galleryImages = [
  '/images/pharmacy1.jpg',
  '/images/pharmacy2.jpg',
  '/images/pharmacy3.jpg',
  '/images/pharmacy4.jpg',
];
export default function Home() {
   useEffect(() => {
    document.title = 'Welcome to The Pharmacy - Your Trusted Pharmacy';
  }, []);
  return (
    
      <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to The Pharmacy
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your health, our priority — trusted medicines delivered fast and safe.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-2xl shadow-lg hover:bg-teal-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </section>
       {/* About Section */}
      <section className="py-16 px-4 md:px-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose ThePharmacy?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We provide a wide range of medicines, health supplements, and personal care products at competitive prices, with 24/7 customer support and fast delivery.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <h3 className="text-2xl md:text-3xl text-center font-semibold mb-8">Explore Our Pharmacy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>
      </div>

   )
}
