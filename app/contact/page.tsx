"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandTwitter, 
  IconBrandInstagram, 
  IconBrandLinkedin,
  IconSend,
  IconCheck
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus("submitting");
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus("success");
      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-400/10 dark:bg-pink-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-full mx-auto px-4 py-6 relative z-10">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-900 to-slate-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl dark:from-neutral-100 dark:to-neutral-300"
          >
            Get in Touch
          </motion.h1>
        </LampContainer>
        
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-neutral-600 dark:text-neutral-400">
            Ready to transform your digital presence? Our team of experts is here to help you achieve your business goals.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800"
          >
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={cn(
                    "bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700",
                    errors.name && "border-red-500 dark:border-red-500"
                  )}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={cn(
                    "bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700",
                    errors.email && "border-red-500 dark:border-red-500"
                  )}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and requirements..."
                  rows={5}
                  className={cn(
                    "bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700",
                    errors.message && "border-red-500 dark:border-red-500"
                  )}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <Button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={cn(
                  "w-full transition-all duration-300 bg-gradient-to-r",
                  formStatus === "success" 
                    ? "from-green-600 to-green-700 dark:from-green-600 dark:to-green-700" 
                    : "from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-600",
                  "hover:shadow-lg"
                )}
              >
                {formStatus === "idle" && (
                  <span className="flex items-center">
                    Send Message <IconSend className="ml-2 h-4 w-4" />
                  </span>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <span className="flex items-center">
                    Sent Successfully <IconCheck className="ml-2 h-4 w-4" />
                  </span>
                )}
                {formStatus === "error" && "Try Again"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white">
                      <IconMail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Email</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      <a href="mailto:hello@youragency.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        hello@youragency.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white">
                      <IconPhone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Phone</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      <a href="tel:+15551234567" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-600 to-pink-700 dark:from-pink-500 dark:to-pink-600 text-white">
                      <IconMapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Office</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      123 Creative Avenue<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                Follow Us
              </h2>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <IconBrandTwitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <IconBrandLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                Business Hours
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Monday - Friday</span>
                  <span className="font-medium text-neutral-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Saturday</span>
                  <span className="font-medium text-neutral-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Sunday</span>
                  <span className="font-medium text-neutral-900 dark:text-white">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}