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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
          />
        </svg>
      ),
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your organization\'s security posture to identify vulnerabilities and recommend mitigation strategies.'
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
          />
        </svg>
      ),
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify and exploit vulnerabilities in your systems before malicious actors can discover them.'
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
          />
        </svg>
      ),
      title: 'Security Compliance',
      description: 'Ensure your organization meets industry regulations and standards such as GDPR, HIPAA, PCI DSS, and ISO 27001.'
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
      title: 'Security Architecture',
      description: 'Design and implementation of robust security frameworks that protect your critical assets while enabling business operations.'
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
            d="M13 10V3L4 14h7v7l9-11h-7z" 
          />
        </svg>
      ),
      title: 'Incident Response',
      description: 'Rapid and effective response to security incidents, minimizing damage and reducing recovery time and costs.'
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
      title: 'Security Training',
      description: 'Customized security awareness programs that transform employees from security vulnerabilities into your first line of defense.'
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
            Comprehensive cybersecurity services tailored to protect your organization's 
            digital assets and infrastructure.
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
            Looking for a customized security solution for your organization? 
            Let's discuss how I can help protect your digital assets.
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
