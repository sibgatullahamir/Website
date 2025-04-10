import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";

// Custom CSS for extra small screens
const styles = {
  xsFlexCol: {
    '@media (max-width: 480px)': {
      flexDirection: 'column'
    }
  }
};

// Job Application Modal Component
const JobApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-4 sm:p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-gray-600 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Apply for {jobTitle}</h3>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-blue-800 text-xs sm:text-sm">
            Please send your resume along with a 100-word answer on "Why should I hire you?" to:
          </p>
          <a href="mailto:hr@placementplaza.com" className="text-blue-600 font-medium block mt-1 sm:mt-2 text-sm sm:text-base hover:underline">
            hr@placementplaza.com
          </a>
        </div>
        
        <div className="text-gray-600 text-xs sm:text-sm">
          <p>Mention the position <span className="font-medium">{jobTitle}</span> in your email subject line to help us process your application faster.</p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-4 sm:mt-6 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

// Job Detail Modal Component
const JobDetailModal = ({ isOpen, onClose, job, onApply }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-xl md:max-w-3xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="mb-4 sm:mb-6 md:mb-8">
          <span className="text-yellow-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
            {job.type} • {job.location}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{job.title}</h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3">
            <div className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
              {job.department}
            </div>
            <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
              {job.experience}
            </div>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Job Description</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">{job.fullDescription}</p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Responsibilities</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Requirements</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
              {job.requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">What We Offer</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
              {job.benefits.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              onClose();
              onApply(job.title);
            }}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            Apply for this Position
          </button>
          
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 mt-2 sm:mt-0 text-sm"
          >
            Back to Listings
          </button>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  // States for modals
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [filter, setFilter] = useState("all");
  
  // Full job listings data
  const jobs = [
    {
      id: 1,
      title: "HR Intern",
      location: "Remote",
      type: "Internship",
      department: "Human Resources",
      experience: "0-1 years",
      description: "Join our HR team to gain valuable experience in recruitment, employee relations, and HR operations.",
      fullDescription: "We are looking for an enthusiastic HR Intern to join our growing team. This position offers a unique opportunity to gain hands-on experience in various HR functions while contributing to meaningful projects that impact our organization.",
      responsibilities: [
        "Assist with recruitment and onboarding processes",
        "Help organize and maintain employee records",
        "Support HR team with administrative tasks",
        "Participate in HR projects and initiatives",
        "Contribute to improving HR policies and procedures"
      ],
      requirements: [
        "Currently pursuing a degree in Human Resources, Business Administration, or related field",
        "Strong interest in HR practices and operations",
        "Excellent organizational and communication skills",
        "Proficiency in Microsoft Office Suite",
        "Ability to maintain confidentiality"
      ],
      benefits: [
        "Hands-on experience in HR operations",
        "Mentorship from experienced HR professionals",
        "Exposure to various HR functions",
        "Flexible working hours",
        "Opportunity for full-time employment based on performance"
      ]
    },
    {
      id: 2,
      title: "HR Specialist",
      location: "Hybrid",
      type: "Full-time",
      department: "Human Resources",
      experience: "2-4 years",
      description: "Drive our recruitment efforts and help build a talented team while ensuring excellent employee experience.",
      fullDescription: "We are seeking a skilled HR Specialist to join our team and help drive our talent acquisition and employee engagement initiatives. The ideal candidate will have experience in recruitment, employee relations, and HR best practices.",
      responsibilities: [
        "Manage full-cycle recruitment process",
        "Develop and implement employee engagement initiatives",
        "Handle employee relations matters",
        "Maintain HR policies and procedures",
        "Assist with performance management processes"
      ],
      requirements: [
        "Bachelor's degree in Human Resources, Business Administration, or related field",
        "2-4 years of experience in HR roles",
        "Strong knowledge of HR best practices and employment laws",
        "Excellent interpersonal and communication skills",
        "Experience with HRIS systems"
      ],
      benefits: [
        "Competitive salary package",
        "Health and wellness benefits",
        "Professional development opportunities",
        "Flexible work arrangements",
        "Collaborative and inclusive work environment"
      ]
    },
    {
      id: 3,
      title: "Industrial Relations Intern",
      location: "On-site",
      type: "Internship",
      department: "Industrial Relations",
      experience: "0-1 years",
      description: "Learn about labor relations, compliance, and industrial policies while supporting our IR team.",
      fullDescription: "We are offering an internship opportunity for students interested in industrial relations and labor law. This position will provide hands-on experience in various aspects of industrial relations while working alongside experienced professionals.",
      responsibilities: [
        "Assist with research on labor laws and regulations",
        "Support the team in preparing documentation for compliance",
        "Help organize meetings and events with stakeholders",
        "Contribute to policy development and implementation",
        "Assist with data collection and analysis for IR projects"
      ],
      requirements: [
        "Currently pursuing a degree in Industrial Relations, Labor Studies, or related field",
        "Strong interest in labor relations and employment law",
        "Good analytical and research skills",
        "Excellent written and verbal communication abilities",
        "Attention to detail and organizational skills"
      ],
      benefits: [
        "Practical experience in industrial relations",
        "Exposure to labor laws and compliance requirements",
        "Networking opportunities with industry professionals",
        "Structured learning program",
        "Possibility of future employment opportunities"
      ]
    },
    {
      id: 4,
      title: "Associate Software Developer Intern",
      location: "Remote",
      type: "Internship",
      department: "Technology",
      experience: "0-1 years",
      description: "Gain hands-on experience in software development while working on real-world projects with our tech team.",
      fullDescription: "We're looking for passionate coding enthusiasts to join our technology team as Associate Software Developer Interns. This role offers a unique opportunity to work on real-world projects while learning from experienced developers in a collaborative environment.",
      responsibilities: [
        "Assist in developing and maintaining web and mobile applications",
        "Participate in code reviews and quality assurance activities",
        "Help troubleshoot and fix bugs in existing applications",
        "Contribute to documentation of technical processes",
        "Collaborate with cross-functional teams on product development"
      ],
      requirements: [
        "Currently pursuing a degree in Computer Science, Software Engineering, or related field",
        "Knowledge of at least one programming language (JavaScript, Python, Java, etc.)",
        "Basic understanding of web development technologies",
        "Eagerness to learn and solve problems",
        "Good communication and teamwork skills"
      ],
      benefits: [
        "Hands-on experience with modern development technologies",
        "Mentorship from senior developers",
        "Exposure to agile development methodologies",
        "Portfolio-building project work",
        "Potential for full-time opportunities after internship"
      ]
    }
  ];
  
  const filteredJobs = filter === "all" 
    ? jobs 
    : jobs.filter(job => 
        filter === "full-time" ? job.type === "Full-time" : job.type === "Internship"
      );
  
  // Modal functions
  const openDetailModal = (job) => {
    setSelectedJob(job);
    setDetailModalOpen(true);
  };
  
  const closeDetailModal = () => {
    setDetailModalOpen(false);
  };
  
  const openApplicationModal = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setApplicationModalOpen(true);
  };
  
  const closeApplicationModal = () => {
    setApplicationModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed header wrapper with proper z-index */}
      <div className="sticky top-0 z-40 w-full bg-white shadow-sm">
        <div className="desktop">
          <Header />
        </div>
        <div className="phone">
          <HeaderPhone />
        </div>
      </div>
      
      {/* Content wrapper with proper spacing from header */}
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="white" />
              <circle cx="300" cy="300" r="120" fill="white" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center sm:text-left">
                Join Our Team
              </h1>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
                Discover exciting career opportunities and be part of a team that's transforming payroll management
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4">
                <button 
                  onClick={() => setFilter("all")}
                  className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    filter === "all" 
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  All Positions
                </button>
                <button 
                  onClick={() => setFilter("full-time")}
                  className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    filter === "full-time" 
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  Full-time
                </button>
                <button 
                  onClick={() => setFilter("internship")}
                  className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    filter === "internship" 
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  Internships
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Jobs Listing Section */}
        <div className="bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6 sm:mb-8 md:mb-12 text-center">
              <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-medium inline-block">
                Opportunities
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2 sm:mt-3 md:mt-4">
                Current Openings
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base px-2">
                Join our dynamic team and help shape the future of payroll management. We offer a collaborative environment where your ideas and contributions matter.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {filteredJobs.map(job => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex items-center flex-wrap gap-2 mt-1">
                          <span className="text-gray-500 text-xs sm:text-sm">{job.location}</span>
                          <span className="text-gray-400 hidden sm:inline">•</span>
                          <span className="text-gray-500 text-xs sm:text-sm">{job.type}</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 inline-block sm:block">
                        {job.department}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">{job.description}</p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                      <button 
                        onClick={() => openDetailModal(job)}
                        className="w-full sm:w-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white border-2 border-indigo-200 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex justify-center items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>View Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => openApplicationModal(job.title)}
                        className="w-full sm:w-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex justify-center items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>Apply Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-6 sm:py-8 md:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900">No positions found</h3>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Why Join Us Section */}
        <div className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-medium inline-block">
                Our Culture
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2 sm:mt-3 md:mt-4">
                Why Join Our Team?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base px-2">
                We're building a team of passionate individuals who are excited about transforming the payroll industry with innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Innovative Environment</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Join a forward-thinking team that's pushing the boundaries of what's possible in payroll management with cutting-edge technology.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Growth & Development</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  We invest in our team members' professional development with continuous learning opportunities and clear career advancement paths.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Collaborative Culture</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Experience a supportive work environment where teamwork is valued and every voice is heard, regardless of your role or experience level.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-yellow-100 max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base px-2">
              We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:hr@placementplaza.com"
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Modals */}
      <JobDetailModal 
        isOpen={detailModalOpen}
        onClose={closeDetailModal}
        job={selectedJob}
        onApply={openApplicationModal}
      />
      
      <JobApplicationModal 
        isOpen={applicationModalOpen}
        onClose={closeApplicationModal}
        jobTitle={selectedJobTitle}
      />

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 480px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
        
        @media (max-width: 640px) {
          /* Improve button touch targets on mobile */
          button {
            min-height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers; 