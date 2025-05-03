import { Phone, Mail, Calendar, Check, Shield, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <div className="w-full">
      {/* Why Choose Us Section - Full width with different background */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 justify-center">
              <Shield className="w-8 h-8 text-amber-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Why Choose Kamal Legal FinTax Pro Solution?</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Experienced Professionals",
                "One-Stop Legal & Taxation Hub",
                "Fast Turnaround & Hassle-Free Service",
                "Transparent & Client-Focused Approach",
                "Affordable Pricing for All Business Sizes",
                "Personalized Solutions Tailored to Your Unique Business Needs"
                
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="mt-1 bg-gradient-to-r from-emerald-400 to-teal-500 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                <span>Learn More About Our Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Need Assistance Section - New style and colors */}
{/* Need Assistance Section - Fully Responsive */}
        <div className="w-full bg-gradient-to-br from-purple-700 to-fuchsia-800 py-8 sm:py-12 md:py-16 relative overflow-hidden">
          {/* Decorative patterns - maintained but optimized */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-64 bg-white" 
                style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          </div>
          <div className="absolute -top-24 -right-24 w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Colored header section - with responsive padding and font sizes */}
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-5 sm:p-6 md:p-8 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 md:mb-3 text-center">
                      Need Assistance? Let's Talk!
                    </h3>
                    <div className="w-12 md:w-16 h-1 bg-yellow-400 mx-auto mb-3 md:mb-4"></div>
                    <p className="text-white/90 text-center max-w-2xl mx-auto text-base sm:text-lg">
                      Whether you're starting a new venture, expanding operations, or looking for compliance support—
                      <span className="font-semibold text-white">we're just a call away</span>.
                    </p>
                  </div>
                </div>
                
                {/* Contact options with responsive grid layout */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-6 md:mb-10">
                    {/* Consultation card - with touch-friendly sizing */}
                    <motion.div 
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden bg-gradient-to-b from-yellow-400 to-amber-500 rounded-xl md:rounded-2xl shadow-lg"
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-filter backdrop-blur-[1px]"></div>
                      <div className="relative p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center h-full">
                        <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-3 md:mb-4" />
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Schedule Your Free Consultation</h4>
                        <p className="text-white/90 text-xs sm:text-sm mb-3 md:mb-4 text-center">Get expert advice tailored to your needs</p>
                        <button className="mt-1 md:mt-2 bg-white/20 hover:bg-white/30 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                          Book Now
                        </button>
                      </div>
                    </motion.div>
                    
                    {/* Contact methods card - with touch-friendly elements */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-4 md:mb-6 text-center">Contact Us Directly</h4>
                      
                      <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        <a href="tel:+919990778501" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full group-hover:shadow-lg transition-all">
                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm">Call Us</p>
                            <p className="text-white font-bold text-base md:text-lg">+91 9990778501</p>
                          </div>
                        </a>
                        
                        <a href="mailto:kamalray.1992@gmail.com" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 rounded-full group-hover:shadow-lg transition-all">
                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-white/60 text-xs sm:text-sm">Email</p>
                            <p className="text-white font-bold text-base md:text-lg truncate">kamalray.1992@gmail.com</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom ribbon - with responsive sizing */}
                  <div className="text-center">
                    <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/10 rounded-full backdrop-blur-sm text-white text-xs sm:text-sm">
                      <span className="mr-1 sm:mr-2">⏱️</span> We typically respond within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default CTASection;