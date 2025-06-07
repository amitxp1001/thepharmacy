'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useEffect } from 'react';

const services = [
  {
    title: 'Prescription Management',
    description: 'Easily upload, manage, and track your prescriptions with our secure platform.',
    icon: 'public/prescription-svgrepo-com.svg', // Placeholder: replace with actual icon path
  },
  {
    title: 'Fast Medication Delivery',
    description: 'Get your medications delivered to your doorstep quickly and reliably.',
    icon: 'public/logistics-delivery-express-svgrepo-com.svg', // Placeholder: replace with actual icon path
  },
  {
    title: 'Online Consultations',
    description: 'Consult with licensed pharmacists from the comfort of your home.',
    icon: 'public/business-person-male-who-consults-svgrepo-com.svg', // Placeholder: replace with actual icon path
  },
  {
    title: 'Refill Reminders',
    description: 'Never miss a dose with our automated refill reminders and notifications.',
    icon: 'public/reminder-alert-svgrepo-com.svg', // Placeholder: replace with actual icon path
  },
];

const ServiceCard = ({ title, description, icon, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <Image src={icon} alt={title} width={48} height={48} className="mr-4" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function ServicesPage() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Pharmacy Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how our app makes managing your health easier, faster, and more convenient.
        </p>
      </motion.header>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center py-16 bg-blue-600 text-white rounded-xl max-w-4xl mx-auto mt-12"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Download our app today and experience seamless pharmacy services at your fingertips.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          Download Now
        </a>
      </motion.section>
    </div>
  );
}