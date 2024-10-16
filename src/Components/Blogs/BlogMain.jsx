import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';


// Sample Blog Data
const blogData = [
    {
        id: 1,
        title: "Understanding Payroll Systems",
        content: "A comprehensive guide to managing payroll efficiently. Lorem ipsum dolor...",
        fullContent: "This is the full content of the blog about Payroll Systems...",
        image: "/public/pexels-pixabay-326055.jpg",
        category: "Payroll",
    },
    {
        id: 2,
        title: "Leave Management Best Practices",
        content: "Tips for managing employee leaves effectively.",
        fullContent: "This is the full content of the blog about Leave Management...",
        image: "https://via.placeholder.com/150",
        category: "Leave",
    },
    {
        id: 3,
        title: "Maximizing Bonus & Benefits for Employees",
        content: "Discover ways to incentivize your workforce.",
        fullContent: "This is the full content of the blog about Bonus & Benefits...",
        image: "https://via.placeholder.com/150",
        category: "Bonus & Benefits",
    },
    {
        id: 4,
        title: "Tax Compliance for Small Businesses",
        content: "Stay on top of tax regulations and avoid penalties.",
        fullContent: "This is the full content of the blog about Tax Compliance...",
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
        <div className={`blog relative p-4 ${getBackgroundColor()} rounded-lg shadow-lg mb-6 top-10 pl-10 pr-10`}>
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

    const filteredBlogs = activeCategory === "All"
        ? blogData
        : blogData.filter(blog => blog.category === activeCategory);

    return (
        <div>
            <nav className="bg-black text-white fixed top-0 left-0 w-full z-10 h-24 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex-shrink-0">
                            <img className="w-24" src="/public/logo.png" alt="Logo" />
                        </div>
                        <div className="flex-1 text-center">
                            <div className="inline-flex space-x-8 text-3xl">
                                <a href="#about-us" className="hover:text-gray-400">About Us</a>
                                <a href="#resources" className="hover:text-gray-400">Resources</a>
                                <a href="#why-us" className="hover:text-gray-400">Why Us?</a>
                                <a href="#pricing" className="hover:text-gray-400">Pricing</a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg  px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Log in
                            </button>
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
                                    />
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
