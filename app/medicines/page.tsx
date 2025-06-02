'use client';
import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

// Sample medicine data
const medicines = [
  { id: 1, name: 'Paracetamol', category: 'Pain Relief', price: 5.99, stock: 100 },
  { id: 2, name: 'Ibuprofen', category: 'Pain Relief', price: 7.99, stock: 80 },
  { id: 3, name: 'Amoxicillin', category: 'Antibiotic', price: 12.99, stock: 50 },
  { id: 4, name: 'Cetirizine', category: 'Antihistamine', price: 4.99, stock: 120 },
  { id: 5, name: 'Metformin', category: 'Diabetes', price: 8.99, stock: 60 },
  { id: 6, name: 'Rabeprazole', category: 'Gastrointestinal', price: 10.99, stock: 60 },
  { id: 7, name: 'Levocetrizine', category: 'Antihistamine', price: 59.99, stock: 60 },
];

export default function Medicines() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter medicines based on search and category
  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || medicine.category === selectedCategory)
  );

  // Unique categories for filter
  const categories = ['All', ...new Set(medicines.map(medicine => medicine.category))];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Medicines - Pharmacy App</title>
        <meta name="description" content="Browse our wide range of medicines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800">Medicines</h1>
          <p className="text-gray-600 mt-2">Find the right medication for your needs</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <input
              type="text"
              placeholder="Search medicines..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <select
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMedicines.map(medicine => (
              <motion.div
                key={medicine.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">{medicine.name}</h2>
                <p className="text-gray-600">{medicine.category}</p>
                <p className="text-gray-800 font-bold mt-2">${medicine.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">Stock: {medicine.stock}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMedicines.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-600 mt-8"
          >
            No medicines found matching your criteria.
          </motion.p>
        )}
      </main>
    </div>
  );
}