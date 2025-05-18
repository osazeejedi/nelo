import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggeredList, ScrollReveal } from './animations';

const Experience = () => {
  // Career timeline data
  const timeline = [
    {
      year: '2022 - Present',
      title: 'Senior Cybersecurity Consultant',
      company: 'SecureNet Solutions',
      description: 'Lead security assessments and implement comprehensive security strategies for Fortune 500 clients. Specialize in threat modeling, security architecture, and advanced persistent threat (APT) defense.',
      achievements: [
        'Reduced security incidents by 80% for a major financial institution',
        'Designed zero-trust architecture for a healthcare provider with 50+ locations',
        'Led a team of 8 security professionals across multiple client engagements'
      ]
    },
    {
      year: '2018 - 2022',
      title: 'Information Security Manager',
      company: 'GlobalTech Industries',
      description: 'Managed enterprise security operations and led the security incident response team. Developed and implemented security policies, standards, and procedures.',
      achievements: [
        'Established a 24/7 security operations center (SOC)',
        'Implemented automated threat intelligence platform reducing response time by 65%',
        'Successfully achieved ISO 27001 certification with zero non-conformities'
      ]
    },
    {
      year: '2015 - 2018',
      title: 'Network Security Engineer',
      company: 'DataGuard Systems',
      description: 'Designed and implemented secure network infrastructure. Conducted vulnerability assessments and penetration testing to identify security gaps.',
      achievements: [
        'Redesigned network security architecture saving $300K annually in operational costs',
        'Implemented intrusion detection/prevention systems across 12 global locations',
        'Developed automated compliance reporting system for regulatory requirements'
      ]
    },
    {
      year: '2012 - 2015',
      title: 'Security Analyst',
      company: 'CyberDefense Corp',
      description: 'Monitored security events and conducted incident investigations. Performed vulnerability scanning and security assessments.',
      achievements: [
        'Identified and remediated critical zero-day vulnerability preventing potential data breach',
        'Created security awareness training program adopted company-wide',
        'Recognized as "Security Professional of the Year" in 2014'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-dark">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-light">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            A decade of experience securing digital assets and protecting organizations 
            from evolving cyber threats.
          </p>
        </FadeIn>

        <div className="relative mt-8">
          {/* Timeline center line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <ScrollReveal 
                key={index} 
                effect={index % 2 === 0 ? "slide" : "fade"} 
                threshold={0.2}
                className="relative"
              >
                {/* Year marker for mobile */}
                <motion.div 
                  className="md:hidden mb-4 inline-block px-4 py-2 bg-primary/20 text-primary rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 148, 136, 0.3)" }}
                >
                  {item.year}
                </motion.div>
                
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left side (odd items) or right side (even items) on desktop */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                    <motion.div 
                      className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg"
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "rgba(30, 41, 59, 1)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {/* Year marker for desktop */}
                      <motion.div 
                        className="hidden md:block mb-2 inline-block px-4 py-1 bg-primary/20 text-primary rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 148, 136, 0.3)" }}
                      >
                        {item.year}
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-semibold text-light">{item.title}</h3>
                      <p className="text-secondary mb-3">{item.company}</p>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{item.description}</p>
                      <h4 className="text-light font-medium mb-2 text-sm sm:text-base">Key Achievements:</h4>
                      <StaggeredList delayIncrement={0.1} initialDelay={0.1} className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm sm:text-base">
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                clipRule="evenodd" 
                              />
                            </motion.svg>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </StaggeredList>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(13, 148, 136, 0)", "0 0 0 10px rgba(13, 148, 136, 0)"],
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.3,
                      boxShadow: {
                        repeat: Infinity,
                        duration: 2,
                      }
                    }}
                  ></motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
