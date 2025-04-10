import React, { useState, useEffect } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";

const varient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const varient2 = {
  initial: {
    y: 200,
    opacity: 0,
  },
  whileInView: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// AI Chatbot Component
const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Common suggested questions - expanded with more options
  const suggestedQuestions = [
    "What services do you offer?",
    "How is your pricing structured?",
    "How does implementation work?",
    "Do you support international payroll?",
    "What security measures do you have?",
    "How do you handle tax compliance?"
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    // Reset suggestions when reopening
    if (!isOpen) {
      setShowSuggestions(true);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSuggestionClick = (question) => {
    setInput(question);
    setMessages([...messages, { text: question, isBot: false }]);
    simulateResponse(question);
    setShowSuggestions(false);
  };

  const simulateResponse = (query) => {
    setIsTyping(true);
    setInput("");
    
    // Expanded knowledge base for AI responses with industry-specific information
    const knowledgeBase = {
      // Company Information
      "about company": "Placement Plaza, powered by TeamTreak HRMS, has been providing payroll and HR solutions since 2010. We serve over 10,000 businesses globally, from startups to enterprises.",
      "locations": "Our headquarters is in Bangalore, India, with additional offices across major cities in India, the US, UK, Singapore, and Australia. We serve clients worldwide.",
      "team": "Our team includes payroll specialists, tax experts, HR professionals, and customer support representatives dedicated to ensuring your success.",
      "competitors": "While we compete with other payroll providers, our integrated approach combining payroll, HR, and hiring solutions sets us apart. We focus on user experience and customer satisfaction.",
      "clients": "Our clients range from small businesses to large enterprises across various industries including technology, healthcare, manufacturing, retail, and professional services.",
      "awards": "We've been recognized with several industry awards, including 'Best Payroll Software' by HR Tech Outlook and 'Top HRMS Solution' by CIO Review.",
      "ceo": "Our CEO, Rajiv Sharma, founded the company in 2010 with a vision to simplify payroll and HR management for businesses of all sizes.",
      "future plans": "We're constantly expanding our platform capabilities. Our roadmap includes enhanced AI features, deeper integrations, and additional global compliance coverage.",
      
      // Product Features
      "features": "Our platform includes payroll processing, tax filing, direct deposits, employee self-service, time tracking, benefits administration, HR management, recruitment tools, and advanced reporting.",
      "international payroll": "Yes, we support international payroll across 50+ countries. Our system handles multiple currencies, international tax regulations, and country-specific compliance requirements.",
      "time tracking": "Our time tracking features include digital time sheets, clock-in/out functionality, overtime calculations, PTO tracking, and integration with payroll for automatic processing.",
      "benefits": "Our benefits administration module helps you manage healthcare, retirement plans, insurance, and other benefits. Employees can enroll and make changes through their self-service portal.",
      "mobile app": "Yes, we offer mobile apps for both employers and employees. They provide secure access to pay information, time tracking, requests, and approvals from any device.",
      "reporting": "Our platform offers 50+ standard reports and a custom report builder. You can schedule regular reports, export in multiple formats, and create visual dashboards.",
      "self service portal": "Our employee self-service portal allows employees to view pay stubs, tax documents, update personal information, request time off, and access company information.",
      "401k": "Yes, our system handles 401(k) deductions and matching. It calculates contributions accurately and integrates with major 401(k) providers.",
      "commission": "Our system can handle complex commission calculations based on various metrics and rules. You can set up different commission structures for different roles or individuals.",
      "performance management": "Our performance management tools include goal setting, continuous feedback, performance reviews, and development planning to help you nurture talent.",
      
      // Security & Compliance
      "security": "We implement bank-level security with 256-bit encryption, regular security audits, multi-factor authentication, and SOC 2 Type II compliance to protect your sensitive data.",
      "data storage": "Your data is stored in secure, redundant data centers with 24/7 monitoring and regular backups. We follow strict data protection protocols and comply with international regulations.",
      "gdpr": "Yes, our system is GDPR compliant. We have implemented necessary measures to protect personal data, provide transparency, and respect data subject rights as required by the regulation.",
      "tax compliance": "We stay current with tax laws across all jurisdictions. Our system is automatically updated with the latest tax tables and regulatory changes to ensure compliance.",
      "aca compliance": "Yes, our system helps with ACA compliance by tracking employee eligibility, generating required forms (1094-C and 1095-C), and providing reports for regulatory requirements.",
      "data retention": "We retain payroll data according to regulatory requirements, typically 7+ years. You can also archive older data within the system while maintaining accessibility.",
      "disaster recovery": "We have comprehensive disaster recovery plans with redundant systems and regular backups. Our uptime guarantee is 99.9% with minimal planned maintenance downtime.",
      "multi-state taxes": "Our system handles multi-state tax compliance automatically. It applies the correct withholding rules based on where employees live and work.",
      
      // Support & Services
      "support": "We offer 24/7 support through chat, email, and phone. Our average response time is under 2 hours, and urgent issues are addressed within 30 minutes.",
      "account manager": "Yes, all clients are assigned a dedicated account manager who serves as your main point of contact and helps with strategic planning, optimization, and issue resolution.",
      "training": "We provide comprehensive training during implementation and ongoing webinars, tutorials, knowledge base articles, and one-on-one sessions as needed.",
      "password reset": "You can reset your password by clicking 'Forgot Password' on the login screen. A secure reset link will be sent to your registered email address.",
      "support hours": "Our technical support team is available 24/7/365 for urgent matters. Standard support hours are Monday-Friday 8AM-8PM in your local time zone.",
      "escalation": "If your issue isn't resolved to your satisfaction, you can request escalation to a senior support specialist or your account manager for priority handling.",
      "report bug": "You can report bugs through your account manager, support chat, or by emailing support@placementplaza.com. Please include steps to reproduce the issue and any relevant screenshots.",
      "feedback": "We welcome your feedback! You can provide suggestions through your account manager, our feedback portal, or during our quarterly client satisfaction surveys.",
      
      // Integrations & Technical
      "integrations": "Our platform integrates with popular accounting software (QuickBooks, Xero, Sage), HR systems, time tracking solutions, benefits platforms, and banking systems.",
      "quickbooks": "Yes, we offer seamless integration with QuickBooks. This syncs payroll data with your accounting system automatically, eliminating double entry and reducing errors.",
      "api": "We provide a comprehensive API that allows for custom integrations with your existing systems. Our developer documentation includes endpoints, authentication, and code examples.",
      "data import": "We can import data from most major payroll providers. During implementation, we'll help migrate your employee data, payroll history, and tax information.",
      "sso": "Yes, we support Single Sign-On (SSO) solutions including SAML, OAuth, and integration with popular identity providers like Okta and Azure AD.",
      "browsers": "Our system is compatible with modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for optimal performance.",
      "custom integration": "Setting up custom integrations typically takes 2-4 weeks depending on complexity. Our integration specialists will work with your team throughout the process.",
      
      // Implementation & Onboarding
      "implementation": "Our implementation typically takes 2-4 weeks depending on your company size and requirements. We assign a dedicated implementation specialist to guide you through the entire process.",
      "onboarding": "The onboarding process includes system setup, data migration, configuration, training, parallel payroll testing, and go-live support to ensure a smooth transition.",
      "data migration": "Yes, we help migrate data from your current provider. This includes employee records, payroll history, tax information, and benefit details to ensure continuity.",
      "parallel payroll": "We recommend running parallel payrolls for 1-2 pay cycles during implementation to verify accuracy before fully transitioning. Our team provides guidance throughout this process.",
      "implementation timeline": "For small businesses (<50 employees), implementation typically takes 2 weeks. For mid-size businesses (50-250 employees), 3-4 weeks. For larger organizations, 4-8 weeks.",
      "best time switch": "The best time to switch payroll providers is at the beginning of a quarter or calendar year to simplify tax reporting. However, our system can handle mid-period transitions if needed.",
      
      // Special Use Cases
      "remote workers": "Our system is ideal for managing remote workers across different locations. It handles various tax jurisdictions, provides mobile access, and offers digital document management.",
      "multiple entities": "Yes, our system supports multi-entity businesses. You can manage separate legal entities with different tax IDs under one account while maintaining appropriate separation.",
      "seasonal workers": "Our flexible system accommodates seasonal workforce fluctuations. You only pay for active employees, and it's easy to onboard and offboard seasonal staff efficiently.",
      "company acquisition": "During a company acquisition, our system can help manage the transition by maintaining separate data sets until you're ready to merge, supporting different pay policies, and providing consolidated reporting.",
      "merger": "For company mergers, we can help standardize payroll processes, manage different compensation structures temporarily, and ensure compliance during the transition period.",
      "multi-department": "For employees working across multiple departments, our system allows you to allocate time and costs accordingly, generating detailed reports for each department.",
      "tipped employees": "Our system handles tipped employees with compliance for tip reporting, tip credits, allocation, and relevant tax calculations based on local regulations.",
      
      // Troubleshooting
      "incorrect pay": "If an employee reports incorrect pay, first verify the time records and pay settings. You can process an off-cycle payment to correct errors. Our support team can help with specific situations.",
      "payroll error": "If you discover an error after submitting payroll, contact our support team immediately. Depending on the timing and nature of the error, we can help with cancellation or correction.",
      "login issues": "For login problems, try clearing your browser cache, using the password reset function, or checking your internet connection. Our support team can assist if these steps don't resolve the issue.",
      "tax filing error": "For tax filing errors, contact our support team with details of the error. We can work with tax agencies to file amendments and ensure proper resolution.",
      "report issues": "If reports aren't generating correctly, try refreshing the page or using a different browser. For persistent issues, contact support with details about the specific report and error.",
      "system access": "If you notice unauthorized system access, immediately contact our security team at security@placementplaza.com or call our emergency hotline. We'll help secure your account and investigate.",
      "slow performance": "If experiencing slow system performance, try clearing your browser cache, using a wired internet connection, and closing unnecessary browser tabs. Contact support if issues persist.",
      
      // Technology & Innovation
      "ai features": "We leverage AI for anomaly detection in payroll, predictive analytics for workforce planning, and smart automation of routine tasks. Our system constantly learns from patterns to improve accuracy.",
      "automation": "Our platform automates calculations, tax updates, report generation, and common workflows to reduce manual effort and minimize errors in your payroll processes.",
      "machine learning": "Our machine learning features help identify potential errors before payroll submission, predict staffing needs based on historical data, and personalize the user experience.",
      "blockchain": "We use blockchain technology for certain security aspects, ensuring data integrity and creating immutable audit trails for critical transactions.",
      "predictive analytics": "Our predictive analytics tools help forecast future payroll costs, identify turnover risks, and optimize workforce scheduling based on historical patterns.",
      "voice activation": "Our mobile app includes voice-activated features for hands-free access to common functions like checking balances, requesting time off, or accessing pay information.",
      
      // Recruitment & Staffing
      "recruitment": "Our recruitment services include job posting, candidate screening, interview scheduling, assessment tools, and onboarding automation to streamline your hiring process.",
      "executive search": "Our executive search service includes targeted headhunting, comprehensive candidate assessment, and personalized recruitment strategies for senior positions.",
      "contract staffing": "We offer flexible workforce solutions with fully compliant contract staffing services, including payroll management and benefits administration for temporary positions.",
      "talent assessment": "Our talent assessment tools use validated methodologies to evaluate candidates' skills, aptitude, personality traits, and job fit to help you make informed hiring decisions.",
      "compensation": "We can help develop competitive compensation structures based on industry benchmarks, internal equity considerations, and your budget constraints.",
      "employee engagement": "Our employee engagement solutions include pulse surveys, recognition tools, feedback mechanisms, and analytics to help you build a motivated workforce.",
      "succession planning": "Our succession planning tools help identify high-potential employees, develop talent pipelines, and ensure business continuity for critical roles.",
      
      // Greeting Responses
      "hello": "Hello! How can I assist you with our payroll and HR solutions today?",
      "thanks": "You're welcome! Is there anything else I can help you with today?",
      "bye": "Thank you for chatting with us. If you need further assistance, feel free to return anytime. Have a great day!",
      "help": "I'm here to help! You can ask me about our payroll services, pricing, features, implementation process, or any specific questions about HRMS. What would you like to know?",
      
      // Pricing & Contract Terms - NEW ENTRIES
      "pricing models": "We offer flexible pricing models tailored to your business size and needs. Our plans include Basic (essential payroll processing), Professional (added HR tools), and Enterprise (full-suite solution). We also provide custom pricing for unique requirements.",
      "pricing tiers": "Our pricing structure is based on the number of employees and selected features. Basic starts at $4 per employee per month, Professional at $8, and Enterprise at $12. Volume discounts are available for larger organizations.",
      "free trial": "Yes, we offer a 30-day free trial of our Professional plan with full access to all features. No credit card is required to start your trial, and our team will provide guided onboarding assistance.",
      "contract terms": "Our standard contracts are month-to-month with no long-term commitment required. We also offer annual plans with a 15% discount. All plans include our standard SLA and support package.",
      "minimum contract": "We don't require minimum contracts for our standard plans. You can cancel anytime with 30 days' notice. For enterprise clients with custom implementations, we recommend at least a 12-month commitment to maximize ROI.",
      "payment methods": "We accept all major credit cards, ACH transfers, and wire transfers. We can also accommodate purchase orders for enterprise clients with established credit.",
      "refund policy": "If you're not satisfied with our service within the first 90 days, we offer a money-back guarantee. After this period, we provide prorated refunds for unused service if you decide to cancel.",
      
      // Payroll Processing - NEW ENTRIES
      "payroll cycles": "Our system supports all common payroll cycles including weekly, bi-weekly, semi-monthly, and monthly. You can also run special or off-cycle payrolls as needed without additional fees.",
      "direct deposit": "Yes, we offer direct deposit to any bank account in the country. Funds are typically available to employees on payday, with processing beginning 2 business days before the pay date.",
      "paper checks": "Yes, we can print and mail physical checks to your office or directly to employees. This service has an additional fee of $1.50 per check. We also offer check stuffing and distribution services.",
      "pay cards": "We support pay cards as an alternative to direct deposit. This is especially useful for unbanked employees. Our system integrates with major pay card providers and manages the enrollment process.",
      "global payments": "Our system supports payments in 135+ currencies with competitive exchange rates. We handle international wire transfers, SEPA payments in Europe, and local bank transfers in many countries.",
      "garnishments": "Our system manages wage garnishments including calculating the correct withholding amounts based on applicable laws, maintaining proper records, and sending payments to the appropriate agencies.",
      "tax deposits": "We handle all federal, state, and local tax deposits on your behalf, ensuring they're submitted accurately and on time. Our system automatically calculates the correct amounts and schedules payments.",
      "year-end taxes": "Our service includes preparation and filing of all year-end tax forms including W-2s, 1099s, and ACA forms. We electronically file with the IRS and state agencies, and provide digital copies to employees.",
      "tax amendments": "If tax amendments are required, our team can prepare and file corrections promptly. For amendments due to our error, there's no additional charge. For client-caused amendments, a nominal fee applies.",
      
      // HR Compliance - NEW ENTRIES
      "hr compliance": "Our compliance features help you navigate complex regulations including FLSA, ACA, FMLA, and state-specific requirements. We provide automatic updates when laws change and alerting for potential compliance issues.",
      "eeoc reporting": "Our system generates EEOC reports including EEO-1 Component 1 and Component 2 data. The reports can be exported in various formats including the government-required formats for direct submission.",
      "i-9 verification": "Our electronic I-9 verification system streamlines the employment eligibility verification process. It guides employees and employers through form completion and integrates with E-Verify for instant verification.",
      "e-verify": "Yes, our system integrates directly with E-Verify. The integration automatically submits new hire information, receives verification results, and manages any follow-up actions required.",
      "cobra administration": "Our COBRA administration features handle the entire process including sending required notices, processing elections, collecting premiums, and managing coverage periods in full compliance with regulations.",
      "affordable care act": "Our ACA compliance tools track employee eligibility, determine full-time status, monitor measurement periods, generate 1095-C forms, and create 1094-C transmittal files for accurate ACA reporting.",
      "fmla tracking": "Our FMLA tracking system helps manage employee leave requests, tracks available leave time, sends notifications for required certifications, and monitors concurrent leave types.",
      
      // HR Analytics - NEW ENTRIES
      "hr analytics": "Our analytics platform provides insights into workforce costs, turnover, performance, and other key metrics. You can create custom dashboards, schedule reports, and identify trends with predictive analytics.",
      "employee turnover": "Our turnover analysis tools help identify patterns and causes of employee departures. The system calculates turnover rates by department, manager, and other factors, helping you address retention issues proactively.",
      "cost forecasting": "Our forecasting tools use historical data and trend analysis to project future labor costs. You can model different scenarios including headcount changes, compensation adjustments, and benefit modifications.",
      "diversity metrics": "Our diversity analytics provide insights into workforce composition, hiring practices, pay equity, and career advancement across different demographic groups to support inclusive workplace initiatives.",
      
      // HR Processes - NEW ENTRIES
      "employee onboarding": "Our digital onboarding solution streamlines the new hire process with electronic forms, document collection, task management, and guided workflows for both HR teams and new employees.",
      "employee offboarding": "Our offboarding process ensures consistent handling of departing employees with automated checklist management, access revocation, exit interviews, and compliance documentation.",
      "performance reviews": "Our performance management system supports various review types including annual, 360-degree, and continuous feedback. It streamlines goal setting, competency assessments, and development planning.",
      "learning management": "Our LMS provides a centralized platform for employee training and development. Features include course creation, skills assessments, certification tracking, and compliance training management.",
      "applicant tracking": "Our recruitment system manages the entire hiring process from job requisition to offer acceptance. It includes candidate sourcing, resume parsing, interview scheduling, and collaborative hiring team workflows.",
      "document management": "Our secure document management system stores and organizes HR documents with role-based access controls. It supports electronic signatures, version control, and automated retention policies.",
      
      // User Experience - NEW ENTRIES
      "mobile experience": "Our mobile apps for iOS and Android provide on-the-go access to essential HR and payroll functions. Employees can view pay statements, request time off, submit expenses, and update personal information.",
      "accessibility features": "Our platform is designed with accessibility in mind, complying with WCAG guidelines. Features include screen reader compatibility, keyboard navigation, color contrast options, and text resizing.",
      "language support": "Our platform supports multiple languages including English, Spanish, French, German, Portuguese, Chinese, and Japanese. Employees can select their preferred language for a personalized experience.",
      "data export": "You can export data in various formats including CSV, Excel, PDF, and API integrations. Scheduled exports can be automatically delivered via email or secure file transfer.",
      "customization": "Our platform offers extensive customization options including branded portals, custom fields, personalized workflows, tailored reports, and configurable security roles to match your specific processes.",
      
      // Data Ownership - NEW ENTRIES
      "data ownership": "You retain full ownership of all your data. We act as a processor under data protection laws, handling your information according to our service agreement and applicable regulations.",
      "data extraction": "If you decide to leave our service, we provide a complete export of your data in standard formats that can be imported into most systems. Our team assists with the data extraction process at no additional cost.",
      "data backup": "We maintain multiple backups of your data with point-in-time recovery capabilities. Daily backups are retained for 30 days, weekly backpoints for 3 months, and monthly archives for 7 years.",
      
      // Implementation Details - NEW ENTRIES
      "implementation steps": "Our implementation follows a proven 5-step process: 1) Discovery & Planning, 2) System Configuration, 3) Data Migration, 4) Testing & Validation, 5) Training & Go-Live. Each phase is guided by your dedicated implementation specialist.",
      "implementation team": "Your implementation team includes a project manager, configuration specialist, data migration expert, and training coordinator. For enterprise clients, we also assign a solution architect and technical integration specialist.",
      "implementation success": "Our implementation success rate is 99.8%, with 95% of clients going live on or before their target date. We provide a detailed project plan with milestones and regular progress updates throughout the process.",
      
      // Industry Recognition - NEW ENTRIES
      "client testimonials": "Our clients consistently praise our intuitive interface, responsive support, and comprehensive features. Case studies and testimonials are available on our website, showcasing success stories across various industries and company sizes.",
      "industry awards": "In addition to being recognized as 'Best Payroll Software' and 'Top HRMS Solution', we've received the 'Innovation in HR Technology' award from HR Tech Outlook and a 'Customer Service Excellence' award from the Customer Service Institute.",
      
      // Payroll Process - NEW ENTRIES
      "payroll processing steps": "Our payroll processing involves: 1) Time data collection/approval, 2) Pre-processing review, 3) Payroll calculation, 4) Audit and approval, 5) Payment processing, 6) Tax filing, and 7) Reporting and analytics.",
      "payroll approval workflow": "Our approval workflow is customizable with multiple levels if needed. Typically, department managers approve time, payroll specialists review pre-processing reports, and payroll managers provide final approval before submission.",
      "payroll calendar": "Our system includes a customizable payroll calendar that displays all processing deadlines, bank holidays, tax due dates, and compliance deadlines. Email reminders are sent automatically for upcoming deadlines.",
      "audit trail": "Every action in the system is recorded in a comprehensive audit trail, showing who made changes, what was changed, and when the change occurred. This provides accountability and helps with compliance requirements.",
      
      // Customer Experience - NEW ENTRIES
      "client reviews": "We maintain a 4.8/5 rating across major review platforms. Clients particularly value our responsive support, intuitive interface, accuracy, and continuous improvement through regular updates.",
      "why choose us": "Clients choose us for our comprehensive platform that combines payroll, HR, and compliance in one system; our dedicated support model; our industry-leading security practices; and our commitment to continuous innovation.",
      "customer satisfaction": "Our customer satisfaction rate is 98%, and our client retention rate is 97%. We conduct regular satisfaction surveys and maintain a client advisory board to ensure we're meeting and exceeding expectations.",
      
      // Financial Operations - NEW ENTRIES
      "bank connection": "Our system connects with over 15,000 financial institutions for secure, automated bank transfers. We use industry-standard encryption and security protocols to protect all financial transactions.",
      "reconciliation": "Our reconciliation tools help match payroll records with bank statements, identifying any discrepancies automatically. The system provides detailed reports for accounting and audit purposes.",
      
      // Industry-Specific Solutions - NEW ENTRIES
      "healthcare industry": "Our healthcare industry solution addresses unique challenges including shift differentials, credential tracking, overtime calculations, and compliance with healthcare-specific regulations such as HIPAA.",
      "manufacturing industry": "For manufacturing businesses, we offer specialized features including production-based incentives, shift premiums, union payroll support, and integration with production management systems.",
      "retail industry": "Our retail-focused solution handles commission structures, seasonal staffing fluctuations, multi-location management, and compliance with predictive scheduling laws and regulations.",
      "hospitality industry": "For hospitality businesses, we provide specialized support for tip reporting, service charges, room and board deductions, and scheduling that complies with industry-specific requirements.",
      "nonprofit organizations": "Our nonprofit solution includes grant allocation tracking, volunteer time management, Form 990 reporting assistance, and special tax considerations for nonprofit entities.",
      "professional services": "For professional services firms, our system handles project-based billing, utilization tracking, professional license management, and complex compensation structures.",
      
      // Compliance Updates - NEW ENTRIES
      "state minimum wage": "Our system automatically updates with state minimum wage changes. We monitor legislation across all states and implement changes before effective dates to ensure your payroll remains compliant.",
      "paid sick leave": "We track and implement paid sick leave laws across different jurisdictions. Our system calculates accruals, tracks usage, and generates required reports for compliance with various state and local requirements.",
      "overtime regulations": "Our system ensures compliance with federal and state overtime regulations, including different calculation methods required by various jurisdictions and special rules for certain industries.",
      "pay equity laws": "We provide tools to help you comply with pay equity laws, including reports to identify potential disparities, documentation features for justifying pay differences, and analytics to track progress over time.",
      
      // System Capabilities - NEW ENTRIES
      "concurrent users": "Our system supports unlimited concurrent users without performance degradation. Role-based access controls ensure each user has appropriate permissions based on their job responsibilities.",
      "system uptime": "We maintain a 99.99% uptime guarantee for our production environment. Our infrastructure includes redundant systems, load balancing, and automated failover to minimize any possible disruptions.",
      "scalability": "Our platform scales seamlessly with your business growth. Whether you're adding employees, expanding to new locations, or acquiring companies, our system adapts without requiring significant reconfiguration.",
      "year-end processing": "Our comprehensive year-end processing tools simplify what's typically a stressful period. We provide checklists, automated validation, early access to forms, and dedicated support during the busy season.",
      
      // Services Overview - NEW ENTRIES
      "services": "Our services include payroll processing, tax filing, HR management, benefits administration, time and attendance tracking, recruiting and onboarding, and compliance support. We offer both software solutions and managed services options.",
      "managed services": "Our managed services option provides you with a dedicated payroll specialist who handles your entire payroll process. This includes data collection, processing, reporting, tax filings, and resolving any issues that arise.",
      "payroll outsourcing": "When you outsource your payroll to us, you gain access to our expertise, technology, and scale. This reduces your administrative burden, ensures compliance, and allows your team to focus on strategic initiatives.",
      "hybrid model": "Our hybrid model allows you to choose which aspects of payroll you want to manage in-house and which you'd prefer to outsource. This flexible approach can be tailored to your organization's specific needs and capabilities."
    };
    
    // Default response if no keywords match
    let responseText = "Thank you for your question. While I don't have the specific information on that topic, our team would be happy to provide a detailed answer. Please use the 'Schedule Consultation' button to connect with our specialists, or ask me about our payroll services, features, pricing, or implementation process.";
    
    // Enhanced fuzzy matching function for better response matching
    const fuzzyMatch = (queryText, keywordText) => {
      const query = queryText.toLowerCase();
      const keyword = keywordText.toLowerCase();
      
      // Exact match
      if (query.includes(keyword) || keyword.includes(query)) {
        return 5;
      }
      
      // Split into words and check for matches
      const queryWords = query.split(/\s+/);
      const keywordWords = keyword.split(/\s+/);
      let matchScore = 0;
      
      // Check for word matches
      queryWords.forEach(queryWord => {
        if (queryWord.length <= 2) return; // Skip very short words
        
        keywordWords.forEach(keywordWord => {
          // Exact word match
          if (queryWord === keywordWord && queryWord.length > 3) {
            matchScore += 2;
          }
          // Partial word match for longer words
          else if (queryWord.length > 4 && keywordWord.length > 4) {
            if (queryWord.includes(keywordWord) || keywordWord.includes(queryWord)) {
              matchScore += 1;
            }
            // Start of word match
            else if (keywordWord.startsWith(queryWord.substring(0, 4)) || 
                    queryWord.startsWith(keywordWord.substring(0, 4))) {
              matchScore += 0.5;
            }
          }
        });
      });
      
      // Check for similar concepts using synonyms
      const payrollSynonyms = ['payroll', 'salary', 'wage', 'payment', 'compensation'];
      const taxSynonyms = ['tax', 'taxes', 'taxation', 'irs', 'filing'];
      const hrSynonyms = ['hr', 'human resources', 'personnel', 'employees', 'staff'];
      const securitySynonyms = ['security', 'protection', 'privacy', 'secure', 'safe'];
      
      const synonymGroups = [payrollSynonyms, taxSynonyms, hrSynonyms, securitySynonyms];
      
      synonymGroups.forEach(group => {
        let queryHasSynonym = false;
        let keywordHasSynonym = false;
        
        group.forEach(synonym => {
          if (query.includes(synonym)) queryHasSynonym = true;
          if (keyword.includes(synonym)) keywordHasSynonym = true;
        });
        
        if (queryHasSynonym && keywordHasSynonym) {
          matchScore += 1;
        }
      });
      
      return matchScore;
    };
    
    // Find the best match using the enhanced fuzzy matching
    let bestMatch = null;
    let highestScore = 0;
    
    Object.keys(knowledgeBase).forEach(keyword => {
      const score = fuzzyMatch(query, keyword);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = keyword;
      }
    });
    
    // If we found a reasonable match
    if (highestScore >= 0.5 && bestMatch) {
      responseText = knowledgeBase[bestMatch];
    }
    
    // Handle common conversational patterns
    const queryLower = query.toLowerCase().trim();
    
    if (queryLower.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i)) {
      responseText = knowledgeBase["hello"];
    } else if (queryLower.match(/^(thanks|thank you|thx|ty|thank)/i)) {
      responseText = knowledgeBase["thanks"];
    } else if (queryLower.match(/^(bye|goodbye|see you|farewell|cya|good night)/i)) {
      responseText = knowledgeBase["bye"];
    } else if (queryLower.match(/^(help|assist|support|what can you do|how to use)/i)) {
      responseText = knowledgeBase["help"];
    } else if (queryLower.includes("services") || queryLower.includes("offer") || queryLower.includes("provide")) {
      responseText = knowledgeBase["services"];
    } else if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("fee") || queryLower.includes("how much")) {
      responseText = knowledgeBase["pricing models"];
    }
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages([...messages, { text: query, isBot: false }, { text: responseText, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    simulateResponse(input);
    setShowSuggestions(false);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-80 md:w-96 flex flex-col h-[450px] border border-gray-200">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="font-medium">PayrollAssist AI</h3>
            </div>
            <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 ${message.isBot ? "flex" : "flex justify-end"}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[85%] ${message.isBot ? "bg-white shadow-sm border border-gray-200" : "bg-indigo-600 text-white"}`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex mb-3">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Suggested Questions */}
            {showSuggestions && messages.length < 3 && !isTyping && (
              <div className="mt-3 mb-2">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question)}
                      className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-r-lg px-4 py-2 font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 pulse-button`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

const Home = () => {
  const uspData = [
    "Streamline Payroll Processing with automated calculations and timely payments.",
    "Comprehensive Tax Compliance ensuring accurate deductions and filings.",
    "Employee Self-Service Portal for easy access to pay stubs and tax documents.",
    "Multi-country Payroll Solutions with local compliance expertise.",
    "Real-time Payroll Analytics and Reporting for better decision making.",
  ];
  const serviceData = [
    {
      title: "Payroll Processing",
      subTitle: "Automated Payroll Management",
      des: "Our automated payroll processing system handles everything from salary calculations to tax deductions. With advanced algorithms and real-time updates, we ensure accurate and timely payroll processing for businesses of all sizes. The system automatically calculates regular wages, overtime, bonuses, and deductions while maintaining compliance with local tax regulations. Our solution reduces manual errors and saves valuable time for your HR team.",
      img: "/hiringtalent.jpg",
    },
    {
      title: "Tax Management",
      subTitle: "Comprehensive Tax Compliance",
      des: "Stay compliant with our comprehensive tax management system that handles all aspects of payroll taxes. From calculating correct tax withholdings to generating year-end tax forms, we ensure your business meets all regulatory requirements. Our system automatically updates with the latest tax laws and regulations, handles multiple state and local tax jurisdictions, and provides detailed reports for audit purposes.",
      img: "/hiringcontractor.jpg",
    },
    {
      title: "Payroll Dashboard",
      subTitle: "Complete Visibility and Control of Your Payroll",
      des: "Our intuitive payroll dashboard provides real-time insights into your organization's payroll operations. Monitor key metrics, track expenses, and access detailed reports all in one place. The dashboard offers customizable views, automated alerts for important deadlines, and comprehensive analytics to help optimize your payroll processes. Generate instant reports for compliance, budgeting, and decision-making purposes.",
      img: "/hrdashboard.jpg",
    },
    {
      title: "Global Payroll",
      subTitle: "Unified Global Payroll Solutions",
      des: "Manage international payroll operations seamlessly with our global payroll solution. Handle multiple currencies, comply with country-specific regulations, and ensure consistent payroll processes across all your locations. Our platform integrates with local tax systems, handles currency conversions, and provides consolidated reporting for your entire global workforce.",
      img: "/hiringsourcegolobaltalent.jpg",
    },
  ];

  const companiesData = [
    "/Companies/janani.png",
    "/Companies/onida.png",
    "/Companies/lg.png",
    "/Companies/mahindra.png",
    "/Companies/samsung.png",
    "/Companies/surya.png",
    "/Companies/godrej.png",
    "/Companies/pfizer.png",
    "/Companies/novartis.png",
    "/Companies/relianceLog.png",
  ];

  const navigate = useNavigate();
  // Service Detail Logics
  const [subTitle, setSubTitle] = useState("Automated Payroll Management");
  const [des, setDes] = useState(serviceData[0].des);
  const [img, setImg] = useState(serviceData[0].img);
  const [selectedIndx, setSelectedIndx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const setIndx = (index) => {
    setSelectedIndx(index);

    setIsFading(true); // Start fade out
    setTimeout(() => {
      setSubTitle(serviceData[index].subTitle);
      setDes(serviceData[index].des);
      setImg(serviceData[index].img);
      setIsFading(false); // Start fade in
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="home">
        <motion.div
          className="banner"
          variants={varient}
          initial="initial"
          animate="animate"
        >
          <motion.h5 variants={varient} className="text-blue-600 font-semibold tracking-wider uppercase">Advanced Payroll & HRMS Solutions</motion.h5>
          <motion.h2 variants={varient} className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your 
            <span className="text-indigo-600">
              {" "}Payroll Management{" "}
            </span>
            with Intelligent Solutions
          </motion.h2>
          <motion.p variants={varient} className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience seamless payroll processing with our integrated platform. From global payments to tax compliance, manage everything through our intelligent system.
          </motion.p>
          <motion.div className="btns flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              onClick={() => navigate("/book-a-demo")}
            >
              <span>Book a Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              onClick={() => navigate("/pricing")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>View Pricing</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trusted By Section */}
        <div className="w-full bg-gray-50 py-12">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="text-center text-gray-700 font-medium mb-10">
              Trusted by leading companies
          </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {companiesData.slice(0, 5).map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Company ${i}`}
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="section-2 bg-white py-20"
          variants={varient2}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <h5 className="text-blue-600 font-semibold tracking-wider text-center uppercase mb-4">Why Choose Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Comprehensive Payroll & HRMS Platform
          </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Leverage our advanced HR platform to streamline your payroll operations with unmatched accuracy and efficiency.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <img src="/usp.jpg" alt="" className="rounded-xl w-full h-auto object-cover" />
              </div>
              <div className="space-y-6">
                {uspData.map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{val}</p>
            </div>
                ))}
                <div>
                  <button
                    className="inline-flex items-center px-5 py-2.5 mt-4 border-2 border-indigo-600 text-indigo-600 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-0.5 font-medium"
                    onClick={() => navigate("/contact-us")}
                  >
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
              </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Services Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <h5 className="text-blue-600 font-semibold tracking-wider text-center uppercase mb-4">Our Core Services</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Streamlined Payroll Solutions
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Explore our comprehensive suite of payroll and HR management services designed to meet the needs of modern businesses.
            </p>

            {/* Service Selection */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {serviceData.map((service, i) => (
                <button
                  key={i}
                  className={`px-5 py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedIndx === i
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIndx(i)}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Service Detail */}
            <div className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-3/5 order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{subTitle}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{des}</p>
                  <button
                    className="inline-flex items-center px-5 py-2.5 mt-4 border-2 border-indigo-600 text-indigo-600 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-0.5 font-medium"
                    onClick={() => navigate("/contact-us")}
                  >
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="md:w-2/5 order-1 md:order-2">
                  <img src={img} alt="" className="rounded-xl shadow-sm w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <h5 className="text-blue-600 font-semibold tracking-wider text-center uppercase mb-4">Additional Services</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Comprehensive HR & Hiring Solutions
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Beyond payroll, we offer a suite of HR and recruitment services to help you manage and grow your workforce effectively.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Benefits Administration",
                  description: "Manage employee benefits, including health insurance, retirement plans, and other perks through our integrated platform.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Time & Attendance",
                  description: "Track employee time and attendance with our automated system, ensuring accurate payroll and compliance with labor laws.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Workforce Analytics",
                  description: "Gain insights into your workforce with advanced analytics and reporting tools that help drive informed decision-making.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "HR Compliance",
                  description: "Stay compliant with changing regulations with our up-to-date compliance tools and expert guidance.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                // Hiring Services
                {
                  title: "Recruitment Services",
                  description: "End-to-end recruitment solutions tailored to your organization's needs, from job posting to candidate selection.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  )
                },
                {
                  title: "Contract Staffing",
                  description: "Flexible workforce solutions with full compliance and payroll management for temporary and contract positions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Executive Search",
                  description: "Specialized search services for senior and executive level positions in your organization.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  )
                },
                {
                  title: "Talent Assessment",
                  description: "Comprehensive evaluation tools to assess candidates' skills, aptitude, and cultural fit for your organization.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button 
                    onClick={() => navigate("/contact-us")}
                    className="text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-800 transition-all duration-300 transform hover:translate-x-0.5"
                  >
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
            </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <h5 className="text-indigo-600 font-semibold tracking-wider text-center uppercase mb-4">Frequently Asked Questions</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Common Questions About Our Services
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Find answers to the most frequently asked questions about our payroll and HR solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  question: "How does your payroll system handle tax compliance?",
                  answer: "Our payroll system automatically updates with the latest tax laws and regulations across different jurisdictions. It calculates the correct tax withholdings, generates accurate tax forms, and ensures your business meets all regulatory requirements. The system handles federal, state, and local taxes, providing detailed reports for audit purposes."
                },
                {
                  question: "Can your system handle international payroll?",
                  answer: "Yes, our global payroll solution seamlessly manages international payroll operations. It handles multiple currencies, complies with country-specific regulations, and ensures consistent payroll processes across all your locations. The platform integrates with local tax systems, handles currency conversions, and provides consolidated reporting for your entire global workforce."
                },
                {
                  question: "How secure is your payroll platform?",
                  answer: "Security is our top priority. Our platform employs bank-level encryption, multi-factor authentication, and regular security audits to protect your sensitive data. We maintain strict compliance with data protection regulations and industry standards, ensuring your payroll information remains confidential and secure."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We provide comprehensive support through multiple channels including phone, email, and live chat. Our dedicated support team is available during business hours to assist with any questions or issues. Additionally, we offer detailed documentation, video tutorials, and regular training sessions to help you make the most of our platform."
                },
                {
                  question: "How does the implementation process work?",
                  answer: "Our implementation process is designed to be smooth and efficient. It begins with an initial consultation to understand your needs, followed by data migration, system configuration, and thorough testing. We provide comprehensive training for your team and offer ongoing support throughout the transition period to ensure a seamless switchover to our system."
                },
                {
                  question: "Can your system integrate with our existing HR software?",
                  answer: "Yes, our platform is built with integration in mind. We offer pre-built integrations with popular HR, accounting, and time tracking software. Our API allows for custom integrations with your existing systems, ensuring a cohesive workflow across your entire HR and payroll ecosystem."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-indigo-600 mr-3 text-2xl font-bold">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => navigate("/contact-us")}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                Have more questions? Contact us
              </button>
            </div>
        </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="section-5 relative overflow-hidden py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-700 opacity-95"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <svg className="absolute top-0 right-0 text-blue-400 opacity-20" width="404" height="404" fill="none" viewBox="0 0 404 404">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-indigo-300" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg className="absolute bottom-0 left-0 text-blue-400 opacity-20" width="404" height="404" fill="none" viewBox="0 0 404 404">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-indigo-300" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative max-w-screen-xl mx-auto px-4 text-center z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-6">READY TO TRANSFORM?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Start Optimizing Your<br className="hidden md:inline" /> Payroll Today
          </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
              Join hundreds of businesses that have transformed their payroll operations with our industry-leading solutions.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate("/contact-us")}
              >
                Schedule Consultation
              </button>
              <button 
                className="px-8 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 text-white rounded-xl hover:bg-opacity-30 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate("/pricing")}
              >
                Explore Our Solutions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
      
      {/* AI Chatbot */}
      <AIChatbot />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Powered by TeamTreak HRMS
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Leverage our TeamTreak HRMS to streamline your payroll operations with unmatched accuracy and efficiency.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => window.open("https://teamtreak.com", "_blank")}
          >
            Explore TeamTreak HRMS
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
