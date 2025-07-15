import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {

  const experiences = [
    {
      title: 'Project Management Intern',
      company: 'SRRS Software Solutions',
      period: 'Mar 2024 – Aug 2024',
      location: 'Remote',
      achievements: [
        'Planned & executed ERP implementations for multiple clients',
        'Coordinated sprint planning using Excel and Trello',
        'Maintained comprehensive project documentation',
        'Facilitated cross-team communication and stakeholder alignment'
      ]
    },
    {
      title: 'Front-end Development Intern',
      company: 'The Language Network',
      period: 'Oct 2023 – Feb 2024',
      location: 'Remote',
      achievements: [
        'Built responsive UIs using HTML, CSS, JavaScript, and Bootstrap',
        'Integrated Git workflows for version control and collaboration',
        'Optimized application performance across multiple devices',
        'Collaborated on UI/UX fixes and enhancements'
      ]
    }
  ];

  return (
    <section className="h-full flex items-center justify-center py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-maroon-600 dark:text-gold-400 mb-2">
                      <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-maroon-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;