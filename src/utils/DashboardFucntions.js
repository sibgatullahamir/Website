// function to get Image with respect to time ------>
export const getImageForTime = (setGreeting) => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    // Morning
    setGreeting("Morning");
    return "/Dashboard/morning.svg";
  } else if (hours >= 12 && hours < 17) {
    // Afternoon
    setGreeting("Afternoon");
    return "/Dashboard/afternoon.png";
  } else if (hours >= 17 && hours < 20) {
    // Evening
    setGreeting("Evening");
    return "/Dashboard/afternoon.png";
  } else {
    // Night
    setGreeting("Night");
    return "/Dashboard/night.png";
  }
};

// Dashboard data ----------------------------------->
export const sliderData = [
  {
    icon: "/Dashboard/add.svg",
    title: "",
    bg: "#FFC20AB8",
  },
  {
    icon: "/Dashboard/updateEmployee-icon.svg",
    title: "Update Employee",
    bg: "#FFC20AB8",
  },
  {
    icon: "/Dashboard/addEmployee-icon.svg",
    title: "Add Employee",
    bg: "#FFC20AB8",
  },
  {
    icon: "/Dashboard/payroll-icon.svg",
    title: "Process Payroll",
    bg: "#52A0DCA8",
  },
  {
    icon: "/Dashboard/sallary-icon.svg",
    title: "Salary statement for a month",
    bg: "#52A0DCA8",
  },
];

// Dashboard help links data
export const helpLinks = [
  "Placement Plaza Community",
  "Social Media Links",
  "How to use: Vedio",
  "Statutory Information",
  "Placemnt Plaza Knowledge Centre",
  "Resource Centre",
];

// Dashboard- Introduction guide datas
export const guideData = [
  {
    title: "Indtroduction to Guide",
    arr: ["Introduction to Guide", "Evaluate using sample data"],
  },
  {
    title: "Setup Organization Detail",
    arr: ["Information of Company", "Statutory Information"],
  },
  {
    title: "Manage Employee Lifecycle",
    arr: [
      "Generate letters to employees",
      "Send Email by creating multiple groups",
      "Create a Freindly collabration with our Social Feeds ",
    ],
  },
  {
    title: "Complete Payroll Processing",
    arr: [
      "Automated payroll inputs and payslips",
      "Complete payroll processing",
      "Comprehensive Post-Payroll Process",
    ],
  },
  {
    title: "Leave Management With Full Customizable Leave Policies",
    arr: [
      "Leave settings",
      "Set Weekend Policy",
      "Create regional or location-based Holiday lists",
      "Automated leave grant and year end processing",
    ],
  },
  {
    title: "Comprehensive Attendance & Overtime Management",
    arr: [
      "Work Hour Configuration",
      "Employee portal: More than a Attendance Register",
    ],
  },
];

// Dashboard right-side cards data
export const cardData = [
  {
    img: "/Dashboard/card-1.svg",
    title: "Book a Demo",
    des: "Booking a demo involves scheduling a session to showcase a product or service's features and benefits. It allows potential customers to see how it works and ask questions.",
    btn: "Book a Demo",
  },
  {
    img: "/Dashboard/card-2.png",
    title: "Themed Webinar",
    des: "Enroll now for our upcoming webinars to maximize your experience. Take the opportunity to engage with experts and have your questions answered.",
    btn: "Enroll Now",
  },
  {
    img: "/Dashboard/card-3.png",
    title: "Send Wish",
    des: "We are delighted to celebrate Riya's work anniversary today. Congratulations on this milestone!",
    btn: "Send Wish",
  },
];

// News data
export const newsData = [
  {
    des: "We're on a hiring roll! Interviews are lined up and ready to go!",
    date: "15 Jul 2024",
  },
  {
    des: "Onboarding process is underway at Placement Plaza!!",
    date: "1 Aug 2024",
  },
  {
    des: "Placement Plaza had spectacular inauguration—let the celebrations begin!",
    date: "4 June 2024",
  },
];
