'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Our Pharmacy App
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Empowering health and wellness through seamless access to medications and care.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center text-gray-600"
          >
            <p>
              We are dedicated to revolutionizing the way you access pharmaceutical services.
              Our app connects you with trusted pharmacies, provides real-time prescription
              tracking, and ensures your health needs are met with ease and efficiency.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Ravi Kumar',
                role: 'Founder & CEO',
                image: '/images/team1.jpg',
              },
              {
                name: 'Arun kumar',
                role: 'Chief Pharmacist',
                image: '/images/team2.jpg',
              },
              {
                name: 'Amit Kumar',
                role: 'Lead Developer',
                image: '/images/team3.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-xl mx-auto mb-6"
          >
            Have questions or need support? Reach out to us, and we’ll be happy to assist
            you with your pharmacy needs.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

    
      
    </div>
  );
}

