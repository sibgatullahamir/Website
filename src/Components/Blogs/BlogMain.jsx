import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

// Sample Blog Data
const blogData = [
    {
        id: 1,
        title: "Understanding Payroll Systems",
        content: "A payroll system is a software solution designed to manage and automate the process of compensating employees. It handles tasks such as calculating wages, withholding taxes, tracking work hours, managing employee benefits, and generating paychecks or direct deposits. Modern payroll systems integrate with accounting, timekeeping, and HR ...",
        fullContent: "A payroll system is a software solution designed to manage and automate the process of compensating employees. It handles tasks such as calculating wages, withholding taxes, tracking work hours, managing employee benefits, and generating paychecks or direct deposits. Modern payroll systems integrate with accounting, timekeeping, and HR platforms, ensuring accuracy and compliance with tax laws. They streamline payroll processes, reduce errors, and enhance overall efficiency, allowing businesses to focus on growth and employee satisfaction.",
        image: "/public/pexels-pixabay-326055.jpg",
        category: "Payroll",
    },
    {
        id: 2,
        title: "Leave Management Best Practices",
        content: "Leave management best practices ensure smooth operations and employee satisfaction. These include creating a clear leave policy that defines types of leave (e.g., vacation, sick, unpaid), setting up an easy-to-use leave management system, and ensuring transparency in leave balances.",
        fullContent: "Leave management best practices ensure smooth operations and employee satisfaction. These include creating a clear leave policy that defines types of leave (e.g., vacation, sick, unpaid), setting up an easy-to-use leave management system, and ensuring transparency in leave balances. Automating approvals reduces delays and improves efficiency. Tracking leave data for insights on workforce productivity helps balance workloads during absences. Regularly reviewing and updating the leave policy ensures it aligns with legal requirements and company goals.",
        image: "https://via.placeholder.com/150",
        category: "Leave",
    },
    {
        id: 3,
        title: "Maximizing Bonus & Benefits for Employees",
        content: "Discover ways to incentivize your workforce. Maximizing bonuses and benefits for employees boosts engagement, retention, and overall satisfaction. Offering performance-based bonuses tied to clear goals motivates employees to excel. Tailor benefits packages to meet diverse needs, including health insurance,",
        fullContent: "Maximizing bonuses and benefits for employees boosts engagement, retention, and overall satisfaction. Offering performance-based bonuses tied to clear goals motivates employees to excel. Tailor benefits packages to meet diverse needs, including health insurance, retirement plans, and wellness programs. Flexible work options and professional development opportunities enhance work-life balance and skill growth. Regularly communicate the value of benefits to employees, and consider personalized incentives for top performers. Aligning rewards with company success fosters a positive, motivated workplace culture.",
        image: "https://via.placeholder.com/150",
        category: "Bonus & Benefits",
    },
    {
        id: 4,
        title: "Tax Compliance for Small Businesses",
        content: "Stay on top of tax regulations and avoid penalties. Tax compliance for small businesses involves adhering to local, state, and federal tax laws to avoid penalties and ensure smooth operations. Key steps include registering for an Employer Identification Number (EIN), accurately tracking income and expenses, and filing tax returns on time.",
        fullContent: "Tax compliance for small businesses involves adhering to local, state, and federal tax laws to avoid penalties and ensure smooth operations. Key steps include registering for an Employer Identification Number (EIN), accurately tracking income and expenses, and filing tax returns on time. Understanding different tax obligations like income tax, payroll tax, and sales tax is essential. Small businesses should maintain organized financial records, seek professional tax advice, and stay informed on changing tax regulations to remain compliant and optimize tax savings.",
        image: "https://via.placeholder.com/150",
        category: "Tax & Compliance",
    },
];

// Blog Component
const Blog = ({ title, content, image, category, id }) => {
    const navigate = useNavigate();

    const getBackgroundColor = () => {
        switch (category) {
            case 'Payroll': return 'bg-purple-100'; // light purple
            case 'Leave': return 'bg-blue-100'; // light blue
            case 'Bonus & Benefits': return 'bg-yellow-100'; // light yellow
            case 'Tax & Compliance': return 'bg-green-100'; // light green
            default: return 'bg-gray-100'; // fallback
        }
    };

    const handleReadMore = () => {
        navigate(`/blogmain/${id}`);
    };

    return (
        <div className={`blog relative p-4 ${getBackgroundColor()} rounded-lg shadow-lg mb-10 top-10 pl-10 pr-10`}>
            <div className="flex">
                <div className="w-3/4">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 mb-4 text-xl">{content}</p>
                    <button
                        onClick={handleReadMore}
                        className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition"
                    >
                        Read More →
                    </button>
                </div>
                <div className="relative w-[26rem]">
                    <img
                        src={image}
                        alt={title}
                        className="absolute top-10 right-0 w- object-cover rounded-md transform translate-x-1/4 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

// Blog Details Component
const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return <div className="p-8">Blog not found</div>;
    }

    return (
        <div className="p-8 relative top-20 flex flex-col items-center">
            <div className="flex justify-center w-full">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[26rem] object-cover rounded-md mb-10"
                />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
            <p className="text-xl text-center mb-20">{blog.fullContent}</p>
        </div>
    );
};

const BlogMain = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");  // Search term state
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blogmain/${id}`);  // Navigate to blog details
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Filter blogs based on category and search term
    const filteredBlogs = blogData.filter((blog) => {
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.content.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            <nav className="bg-black text-white fixed top-0 left-0 w-full z-10 h-24 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-between items-center h-full">
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            <img src="./logo.png" alt="Logo" className="w-20" />
                        </div>
                        <div className="flex-1 text-center">
                            <div className="inline-flex space-x-8 text-3xl">
                                <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
                                {/* <a href="#why-us" className="hover:text-gray-400">Why Us?</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`fixed top-24 left-0 w-full bg-white text-black z-10 p-6 pt-5 transition-all duration-300 ease-in-out ${isScrolled ? 'text-center text-xl font-medium' : 'text-center text-2xl font-medium'}`}>
                {isScrolled ? (
                    <p>Discover fresh ideas, expert insights, and innovative solutions as you explore our blog!</p>
                ) : (
                    <p>
                        Discover fresh ideas, expert insights, <br /> and innovative solutions as you explore our blog!
                    </p>
                )}
            </div>

            <div className="pt-24 flex w-full">
                <Routes>
                    <Route path="/" element={
                        <div className="flex w-full">
                            <div className="w-1/4 fixed top-48 left-0 h-screen flex flex-col pl-12 overflow-y-auto z-10 pt-4">
                                <div className="flex px-4 py-3 rounded-3xl border-2 border-black overflow-hidden w-full mx-auto font-[sans-serif] mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full outline-none bg-transparent text-gray-600 text-sm"
                                        value={searchTerm}  // Bind search input to state
                                        onChange={(e) => setSearchTerm(e.target.value)}  // Update search term
                                    />
                                    <FaSearch className="text-gray-500 ml-2 cursor-pointer text-xl" />
                                </div>

                                <div className="p-4 space-y-2 flex-1 overflow-y-auto">
                                    <ul className="space-y-2 text-left pl-1 font-semibold text-xl">
                                        {["All", "Payroll", "Leave", "Bonus & Benefits", "Tax & Compliance"].map((link, index) => (
                                            <li key={index}>
                                                <a href="#" onClick={() => setActiveCategory(link)} className="block p-1 hover:bg-[#fffdca] transition-colors duration-200">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="relative ml-96 w-full pt-20 pb-4 px-20">
                                {filteredBlogs.map((blog) => (
                                    <Blog key={blog.id} title={blog.title} content={blog.content} image={blog.image} category={blog.category} id={blog.id} />
                                ))}
                            </div>
                        </div>
                    } />

                    <Route path="/:id" element={<BlogDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default BlogMain;
