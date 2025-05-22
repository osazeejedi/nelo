import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from './animations';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "Chinelo's expertise in financial crime investigation was instrumental in uncovering a complex fraud scheme within our organization. Her methodical approach to tracing assets and gathering evidence led to successful prosecution and asset recovery.",
      name: "Hamma'Adama Bello",
      position: "Assistant Commander of the EFCC, SA to the National Security Adviser, Nigeria",
      rating: 5
    },
    {
      quote: "I highly recommend Chinelo. She is a person of exceptional integrity, adhering to the highest ethical standards. Chinelo possesses a deep empathy, allowing her to understand and navigate the sensitive nature of financial crime investigations with compassion and understanding. Her dedication to justice is unwavering; she is committed to uncovering the truth and ensuring accountability in every situation. Chinelo's expertise, combined with these crucial personal qualities, makes her an invaluable asset. I recommend her without reservation.",
      name: "Alberto Tebaldi",
      position: "Hospitality Consultant, Italy",
      rating: 5
    },
    {
      quote: "Chinelo's financial crime risk assessment uncovered critical vulnerabilities that our previous audits had missed. Her detailed remediation plan was practical and effective, significantly improving our regulatory compliance posture.",
      name: "David Adeyemi",
      position: "CEO, Nigerian Financial Intelligence Unit",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what my clients have to say about my financial crime investigation and compliance expertise.
          </p>
        </FadeIn>

        <StaggeredList 
          delayIncrement={0.15} 
          initialDelay={0.2} 
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col h-full relative"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(13, 148, 136, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Decorative quote mark */}
              <motion.div 
                className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  delay: 0.3 + index * 0.1, 
                  duration: 0.5,
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
              >
                "
              </motion.div>
              
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    initial={{ opacity: 0, scale: 0, rotate: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                  >
                    <path 
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                    />
                  </motion.svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-300 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center mt-auto">
                {/* Placeholder avatar - replace with actual client photos if available */}
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-light/70" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                </motion.div>
                <div>
                  <p className="font-medium text-light">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              
              {/* Decorative quote mark (end) */}
              <motion.div 
                className="absolute -bottom-4 -right-4 text-4xl text-primary/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  delay: 0.4 + index * 0.1, 
                  duration: 0.5,
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  }
                }}
              >
                "
              </motion.div>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
};

export default Testimonials;
