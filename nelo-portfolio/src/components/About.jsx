import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FadeIn, StaggeredList, ScrollReveal, CountUp } from './animations';

const About = () => {
  // Core competencies array with name and proficiency percentage
  const coreCompetencies = [
    { name: 'Financial Crime Investigation', percentage: 95 },
    { name: 'AML/CFT Compliance', percentage: 92 },
    { name: 'Asset Tracing & Recovery', percentage: 90 },
    { name: 'Risk Assessment', percentage: 88 },
    { name: 'Sanctions & Prosecution', percentage: 85 },
    { name: 'Regulatory Policy Development', percentage: 82 },
  ];

  // Technical skills array
  const technicalSkills = [
    { name: 'MS Excel', percentage: 95 },
    { name: 'Power BI', percentage: 88 },
    { name: 'Tableau', percentage: 85 },
    { name: 'STR/SAR Analysis', percentage: 92 },
    { name: 'Database & Sanctions List Screening', percentage: 90 },
  ];

  // Certifications array
  const certifications = [
    'Certified Anti-Money Laundering Specialist (CAMS), ACAMS – March 2025',
    'Certified Financial Crime Specialist (CFCS), ACFCS – January 2023',
  ];

  // Education array
  const education = [
    'Masters in International Affairs and Diplomacy (In Progress) – Ahmadu Bello University, Nigeria',
    'Bachelor of Science in Economics – University of Nigeria, Nsukka',
  ];

  // Languages array
  const languages = [
    'English (Proficient)',
    'Basic French (A2)',
    'Igbo',
    'Hausa',
    'Yoruba',
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light">
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A dedicated financial crime specialist with 8 years of experience investigating 
            complex financial crimes and enforcing compliance frameworks.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bio Section */}
          <div>
            <ScrollReveal effect="fade">
              <h3 className="text-xl font-semibold text-light mb-4">Professional Bio</h3>
              <p className="text-gray-300 mb-4">
                I'm a Certified Financial Crime Specialist (CFCS) and Anti-Money Laundering 
                Specialist (CAMS) with a proven record of completing 100+ financial crime 
                investigations involving fraud, asset tracing, and terrorist financing.
              </p>
              <p className="text-gray-300 mb-4">
                My work at the Office of the National Security Adviser and EFCC reflects 
                deep dedication to regulatory compliance, risk mitigation, and data-driven 
                intelligence gathering.
              </p>
              <p className="text-gray-300">
                I've successfully led investigations in major bribery scandals and recovered 
                assets worth billions, while collaborating with national and international 
                agencies to enforce financial regulations.
              </p>
            </ScrollReveal>

            <FadeIn direction="up" delay={0.3} className="mt-8">
              <h3 className="text-xl font-semibold text-light mb-4">Certifications</h3>
              <StaggeredList delayIncrement={0.1} initialDelay={0.1} className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary mr-2" 
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
                    {cert}
                  </li>
                ))}
              </StaggeredList>
            </FadeIn>
          </div>

          {/* Skills Section */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-xl font-semibold text-light mb-6">Core Competencies</h3>
              <div className="space-y-5">
                {coreCompetencies.map((skill, index) => {
                  const controls = useAnimation();
                  const ref = useRef(null);
                  const isInView = useInView(ref, { 
                    once: true, 
                    margin: "0px", 
                    threshold: 0.2 
                  });
                  
                  useEffect(() => {
                    // Ensure animation triggers on mobile
                    if (isInView) {
                      controls.start({
                        width: `${skill.percentage}%`,
                        transition: { duration: 1.5, ease: "easeOut", delay: 0.1 + index * 0.05 }
                      });
                    }
                    
                    // Fallback to ensure animation completes even if not in view
                    const timer = setTimeout(() => {
                      controls.start({
                        width: `${skill.percentage}%`,
                        transition: { duration: 1, ease: "easeOut" }
                      });
                    }, 2000); // Fallback after 2 seconds
                    
                    return () => clearTimeout(timer);
                  }, [controls, isInView, index, skill.percentage]);
                  
                  return (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          ref={ref}
                          initial={{ width: "0%" }}
                          animate={controls}
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          style={{ willChange: "width" }} // Optimize animation performance
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="mt-8">
              <h3 className="text-xl font-semibold text-light mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => {
                  const controls = useAnimation();
                  const ref = useRef(null);
                  const isInView = useInView(ref, { 
                    once: true, 
                    margin: "0px", 
                    threshold: 0.2 
                  });
                  
                  useEffect(() => {
                    // Ensure animation triggers on mobile
                    if (isInView) {
                      controls.start({
                        width: `${skill.percentage}%`,
                        transition: { duration: 1.5, ease: "easeOut", delay: 0.1 + index * 0.05 }
                      });
                    }
                    
                    // Fallback to ensure animation completes even if not in view
                    const timer = setTimeout(() => {
                      controls.start({
                        width: `${skill.percentage}%`,
                        transition: { duration: 1, ease: "easeOut" }
                      });
                    }, 2000); // Fallback after 2 seconds
                    
                    return () => clearTimeout(timer);
                  }, [controls, isInView, index, skill.percentage]);
                  
                  return (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          ref={ref}
                          initial={{ width: "0%" }}
                          animate={controls}
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          style={{ willChange: "width" }} // Optimize animation performance
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="mt-8">
              <h3 className="text-xl font-semibold text-light mb-4">Education</h3>
              <StaggeredList delayIncrement={0.1} initialDelay={0.1} className="space-y-2">
                {education.map((edu, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary mr-2" 
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
                    {edu}
                  </li>
                ))}
              </StaggeredList>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="mt-8">
              <h3 className="text-xl font-semibold text-light mb-4">Languages</h3>
              <StaggeredList delayIncrement={0.1} initialDelay={0.1} className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary mr-2" 
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
                    {lang}
                  </li>
                ))}
              </StaggeredList>
            </FadeIn>

            <StaggeredList delayIncrement={0.1} initialDelay={0.3} className="grid grid-cols-2 gap-4 mt-8">
              <motion.div 
                className="bg-dark p-4 rounded-lg"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.3)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <CountUp 
                  end={100} 
                  suffix="+" 
                  className="text-3xl font-bold text-primary mb-2 block" 
                />
                <div className="text-gray-300">Investigations Completed</div>
              </motion.div>
              <motion.div 
                className="bg-dark p-4 rounded-lg"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <CountUp 
                  end={31} 
                  suffix="B" 
                  className="text-3xl font-bold text-secondary mb-2 block" 
                />
                <div className="text-gray-300">Assets Recovered (₦)</div>
              </motion.div>
              <motion.div 
                className="bg-dark p-4 rounded-lg"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.3)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <CountUp 
                  end={40} 
                  suffix="M" 
                  className="text-3xl font-bold text-primary mb-2 block" 
                />
                <div className="text-gray-300">Assets Recovered ($)</div>
              </motion.div>
              <motion.div 
                className="bg-dark p-4 rounded-lg"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <CountUp 
                  end={5} 
                  suffix="+" 
                  className="text-3xl font-bold text-secondary mb-2 block" 
                />
                <div className="text-gray-300">Languages Spoken</div>
              </motion.div>
            </StaggeredList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
