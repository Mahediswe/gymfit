import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images (replace with your actual images)
import blog1 from "../assets/p1.jpg";
import blog2 from "../assets/m2.jpg";
import blog3 from "../assets/m4.jpg";
import blog4 from "../assets/m1.jpg";
//import author from "../assets/p1.jpg";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Effective Weight Training",
      excerpt: "Learn the best practices for maximizing your weight training sessions.",
      image: blog1,
      category: "Fitness",
      date: "Sep 15, 2023",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Nutrition Guide for Muscle Building",
      excerpt: "Discover the essential nutrients your body needs to build muscle.",
      image: blog2,
      category: "Nutrition",
      date: "Sep 10, 2023",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Yoga for Strength and Flexibility",
      excerpt: "How yoga can improve your strength and flexibility.",
      image: blog3,
      category: "Wellness",
      date: "Sep 5, 2023",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Cardio vs Weight Training",
      excerpt: "A comparison of cardio and weight training for different goals.",
      image: blog4,
      category: "Fitness",
      date: "Aug 28, 2023",
      readTime: "8 min"
    }
  ];

  const categories = ["All", "Fitness", "Nutrition", "Wellness"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">GYM FIT Blog</h1>
          <p className="text-gray-300">
            Fitness tips and advice to help you achieve your goals.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  activeCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-amber-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="block text-lg font-semibold text-gray-900 mb-2 hover:text-amber-600"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="text-xs text-gray-500">
                  {post.readTime} read
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Import images (replace with your actual images)
// import blog1 from "../assets/p1.jpg";
// import blog2 from "../assets/p1.jpg";
// import blog3 from "../assets/p1.jpg";
// import blog4 from "../assets/p1.jpg";

// import author from "../assets/p1.jpg";

// const BlogPage = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [expandedPost, setExpandedPost] = useState(null);
  
//   const blogPosts = [
//     {
//       id: 1,
//       title: "10 Tips for Effective Weight Training",
//       excerpt: "Learn the best practices for maximizing your weight training sessions.",
//       fullContent: "Weight training is essential for building strength and muscle mass. In this comprehensive guide, we cover the top 10 tips that will help you get the most out of your workouts. From proper form to progressive overload, these strategies will transform your training routine.",
//       image: blog1,
//       category: "Fitness",
//       date: "Sep 15, 2023",
//       readTime: "5 min",
//       author: "John Trainer",
//       authorImage: author
//     },
//     {
//       id: 2,
//       title: "Nutrition Guide for Muscle Building",
//       excerpt: "Discover the essential nutrients your body needs to build muscle.",
//       fullContent: "Nutrition plays a crucial role in muscle development. This guide covers the macronutrients and micronutrients essential for muscle growth, along with meal timing and supplementation advice to maximize your results.",
//       image: blog2,
//       category: "Nutrition",
//       date: "Sep 10, 2023",
//       readTime: "7 min",
//       author: "Sarah Nutritionist",
//       authorImage: author
//     },
//     {
//       id: 3,
//       title: "Yoga for Strength and Flexibility",
//       excerpt: "How yoga can improve your strength and flexibility.",
//       fullContent: "Yoga isn't just about flexibility - it's a powerful tool for building functional strength. Learn how specific yoga poses and sequences can enhance your overall fitness and complement your existing workout routine.",
//       image: blog3,
//       category: "Wellness",
//       date: "Sep 5, 2023",
//       readTime: "6 min",
//       author: "Mike Yogi",
//       authorImage: author
//     },
//     {
//       id: 4,
//       title: "Cardio vs Weight Training",
//       excerpt: "A comparison of cardio and weight training for different goals.",
//       fullContent: "Both cardio and weight training offer unique benefits. This article breaks down when to prioritize each type of exercise based on your fitness goals, whether it's weight loss, muscle gain, or overall health improvement.",
//       image: blog4,
//       category: "Fitness",
//       date: "Aug 28, 2023",
//       readTime: "8 min",
//       author: "Emily Coach",
//       authorImage: author
//     },
//   ];

//   const categories = ["All", "Fitness", "Nutrition", "Wellness"];

//   const filteredPosts = activeCategory === "All" 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === activeCategory);

//   const toggleExpand = (postId) => {
//     if (expandedPost === postId) {
//       setExpandedPost(null);
//     } else {
//       setExpandedPost(postId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-gray-900 to-amber-700 text-white py-16">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold mb-4">GYM FIT Blog</h1>
//           <p className="text-xl text-gray-100 max-w-2xl mx-auto">
//             Fitness tips, nutrition advice, and wellness strategies to help you achieve your goals.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-12">
//         {/* Category Filters */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Browse Categories</h2>
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setActiveCategory(category);
//                   setExpandedPost(null);
//                 }}
//                 className={`px-5 py-2 rounded-full font-medium transition-all ${
//                   activeCategory === category
//                     ? "bg-amber-500 text-white shadow-md"
//                     : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-50"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog Posts Grid */}
//         <div>
//           <h2 className="text-2xl font-bold mb-8 text-gray-800">Latest Articles</h2>
//           <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredPosts.map(post => (
//               <article 
//                 key={post.id} 
//                 className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
//                   expandedPost === post.id ? 'lg:col-span-4' : ''
//                 }`}
//               >
//                 <div className={`${expandedPost === post.id ? 'flex flex-col lg:flex-row' : ''}`}>
//                   {/* Image */}
//                   <div className={`${expandedPost === post.id ? 'lg:w-1/3' : ''}`}>
//                     <img
//                       className="h-48 w-full object-cover"
//                       src={post.image}
//                       alt={post.title}
//                     />
//                   </div>
                  
//                   {/* Content */}
//                   <div className={`p-5 ${expandedPost === post.id ? 'lg:w-2/3' : ''}`}>
//                     <div className="flex justify-between items-center mb-3">
//                       <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
//                         {post.category}
//                       </span>
//                       <span className="text-xs text-gray-500">{post.date}</span>
//                     </div>
                    
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                       {post.title}
//                     </h3>
                    
//                     <p className="text-gray-600 text-sm mb-4">
//                       {post.excerpt}
//                     </p>
                    
//                     {/* Expanded Content */}
//                     {expandedPost === post.id && (
//                       <div className="mt-4">
//                         <p className="text-gray-700 mb-4">{post.fullContent}</p>
//                         <div className="flex items-center mb-4">
//                           <img
//                             className="h-8 w-8 rounded-full object-cover mr-2"
//                             src={post.authorImage}
//                             alt={post.author}
//                           />
//                           <span className="text-sm font-medium text-gray-900">{post.author}</span>
//                         </div>
//                       </div>
//                     )}
                    
//                     <div className="flex justify-between items-center">
//                       <span className="text-xs text-gray-500">
//                         {post.readTime} read
//                       </span>
                      
//                       <button
//                         onClick={() => toggleExpand(post.id)}
//                         className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
//                       >
//                         {expandedPost === post.id ? 'Show Less' : 'Show Details'}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Load More Button (if needed) */}
//         {filteredPosts.length > 4 && (
//           <div className="mt-12 text-center">
//             <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors">
//               Load More
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default BlogPage;