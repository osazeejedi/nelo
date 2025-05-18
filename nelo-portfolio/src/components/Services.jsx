import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from './animations';

const Services = () => {
  // Services data
  const services = [
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
          />
        </svg>
      ),
      title: 'Financial Crime Investigation',
      description: 'Thorough investigation of complex financial crimes including fraud, money laundering, and corruption with detailed evidence collection and analysis.'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
          />
        </svg>
      ),
      title: 'AML/CFT Compliance',
      description: 'Implementation of robust Anti-Money Laundering and Counter-Financing of Terrorism frameworks to ensure regulatory compliance.'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      ),
      title: 'Asset Tracing & Recovery',
      description: 'Specialized techniques to identify, trace, and recover assets linked to financial crimes across multiple jurisdictions.'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
          />
        </svg>
      ),
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of financial crime risks within your organization with tailored mitigation strategies and controls.'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" 
          />
        </svg>
      ),
      title: 'Sanctions & Prosecution Support',
      description: 'Expert witness testimony and evidence preparation for financial crime cases, ensuring successful prosecution outcomes.'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
          />
        </svg>
      ),
      title: 'Compliance Training',
      description: 'Customized training programs on financial crime detection, prevention, and compliance for organizations of all sizes.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light">
            My <span className="text-primary">Services</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Specialized financial crime services designed to protect your organization 
            from fraud, money laundering, and regulatory non-compliance.
          </p>
        </FadeIn>

        <StaggeredList 
          delayIncrement={0.1} 
          initialDelay={0.2} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-dark p-6 rounded-lg shadow-lg"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(15, 23, 42, 0.9)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
              }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-light mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </StaggeredList>

        {/* Call to action */}
        <FadeIn direction="up" delay={0.5} className="mt-16 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Need expert assistance with financial crime prevention or investigation? 
            Let's discuss how I can help protect your organization from financial threats.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(13, 148, 136, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
