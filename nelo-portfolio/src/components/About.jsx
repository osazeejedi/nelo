import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FadeIn, StaggeredList, ScrollReveal, CountUp } from './animations';

const About = () => {
  // Skills array with name and proficiency percentage
  const skills = [
    { name: 'Network Security', percentage: 95 },
    { name: 'Threat Detection', percentage: 90 },
    { name: 'Penetration Testing', percentage: 85 },
    { name: 'Security Auditing', percentage: 90 },
    { name: 'Incident Response', percentage: 88 },
    { name: 'Cloud Security', percentage: 82 },
  ];

  // Certifications array
  const certifications = [
    'Certified Information Systems Security Professional (CISSP)',
    'Certified Ethical Hacker (CEH)',
    'Certified Information Security Manager (CISM)',
    'CompTIA Security+',
    'Offensive Security Certified Professional (OSCP)',
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
            A dedicated cybersecurity professional with over a decade of experience 
            protecting organizations from evolving digital threats.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bio Section */}
          <div>
            <ScrollReveal effect="fade">
              <h3 className="text-xl font-semibold text-light mb-4">Professional Bio</h3>
              <p className="text-gray-300 mb-4">
                With over 10 years of experience in cybersecurity, I specialize in developing 
                and implementing comprehensive security strategies that protect critical 
                infrastructure and sensitive data from sophisticated cyber threats.
              </p>
              <p className="text-gray-300 mb-4">
                My approach combines proactive threat hunting, vulnerability assessment, 
                and security architecture design to create robust defense systems that 
                stay ahead of emerging attack vectors.
              </p>
              <p className="text-gray-300">
                I've successfully led security transformations for organizations across 
                financial services, healthcare, and government sectors, reducing security 
                incidents by an average of 75% while optimizing security operations.
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
              <h3 className="text-xl font-semibold text-light mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => {
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
                  end={150} 
                  suffix="+" 
                  className="text-3xl font-bold text-primary mb-2 block" 
                />
                <div className="text-gray-300">Projects Completed</div>
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
                  end={50} 
                  suffix="+" 
                  className="text-3xl font-bold text-secondary mb-2 block" 
                />
                <div className="text-gray-300">Satisfied Clients</div>
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
                  end={200} 
                  suffix="+" 
                  className="text-3xl font-bold text-primary mb-2 block" 
                />
                <div className="text-gray-300">Security Audits</div>
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
                  end={15} 
                  suffix="+" 
                  className="text-3xl font-bold text-secondary mb-2 block" 
                />
                <div className="text-gray-300">Industry Awards</div>
              </motion.div>
            </StaggeredList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
