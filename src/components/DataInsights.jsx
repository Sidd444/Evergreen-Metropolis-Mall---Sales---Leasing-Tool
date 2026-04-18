import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function DataInsights({ insights }) {
  return (
    <motion.div
      className="w-full mt-20 p-8 lg:p-12 bg-gray-900 shadow-inner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="font-serif text-4xl text-accent text-center mb-10">Key Performance Indicators</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.label}
            className="flex flex-col items-center text-center p-6 bg-primary-dark shadow-lg border border-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          >
            <p className="font-sans text-lg text-gray-400 mb-2">{insight.label}</p>
            <h3 className="font-serif text-5xl text-secondary-light mb-4">
              {insight.value}<span className="text-accent text-3xl">{insight.unit}</span>
            </h3>
            {/* Simple CSS bar for visual representation without Recharts complexity here */}
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${insight.value}%` }}
                transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recharts example - uncomment and adjust data if a more complex chart is needed */}
      {/* <h3 className="font-serif text-2xl text-secondary-light text-center mt-16 mb-8">Visitor Demographics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={[
            { name: '18-24', visitors: 20 },
            { name: '25-34', visitors: 35 },
            { name: '35-44', visitors: 25 },
            { name: '45-54', visitors: 15 },
            { name: '55+', visitors: 5 },
          ]}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#f0f0f0" className="font-sans text-sm" />
          <YAxis stroke="#f0f0f0" className="font-sans text-sm" />
          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', color: '#f0f0f0' }} />
          <Bar dataKey="visitors" fill="#b5935b" animationDuration={1500} />
        </BarChart>
      </ResponsiveContainer> */}
    </motion.div>
  );
}

export default DataInsights;