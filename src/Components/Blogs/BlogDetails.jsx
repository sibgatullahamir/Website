// // BlogDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const BlogDetails = ({ blogData }) => {
//     // Extract blog ID from URL parameters
//     const { id } = useParams();

//     // Find the blog post that matches the ID
//     const blogPost = blogData.find(post => post.id === id);

//     return (
//         <div className="blog-details">
//             {blogPost ? (
//                 <div>
//                     <h1>{blogPost.title}</h1>
//                     <img src={blogPost.image} alt={blogPost.title} />
//                     <p>{blogPost.content}</p>
//                     {/* Add any additional details here */}
//                 </div>
//             ) : (
//                 <p>Blog post not found.</p>
//             )}
//         </div>
//     );
// };

// export default BlogDetails;
