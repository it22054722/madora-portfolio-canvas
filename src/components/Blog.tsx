import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import blogPost1 from "@/assets/blog-post1.jpg";
import blogPost2 from "@/assets/blog-post2.jpg";
import blogPost3 from "@/assets/blog-post3.jpg";


interface BlogPost {
  id: number;
  category: string;
  date: { month: string; day: string };
  title: string;
  description: string;
  readTime: string;
  url: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "OOP",
    date: { month: "JUN", day: "19" },
    title: "Understanding Object Oriented Programming",
    description: "One of the most important features of Java is that it is a powerful, versatile programming language that every student who wants to become a computer scientist needs to know. Among the most important things to understand about Java is its ability to support Object-Oriented Programming (OOP).",
    readTime: "5 min read",
    url: "https://zencode002.hashnode.dev/understanding-object-oriented-programming",
    image: blogPost1,
  },
  {
    id: 2,
    category: "Java",
    date: { month: "JUN", day: "30" },
    title: "Understanding Java Collections & Framework",
    description: "Basic Introduction to Java Collections Framework (JCF) is an important part of Java that provides classes and interfaces to work with objects in a collection.",
    readTime: "6 min read",
    url: "https://zencode002.hashnode.dev/java-collections-framework",
    image: blogPost2,
  },
  {
    id: 3,
    category: "Java",
    date: { month: "FEB", day: "15" },
    title: "Java Data Structures: Stacks, Queues, Lists, and Trees",
    description: "Java is a sophisticated programming language and comes with a variety of data structures to make managing data easy.",
    readTime: "7 min read",
    url: "https://zencode002.hashnode.dev/understanding-java-data-structures-stacks-queues-lists-and-trees",
    image: blogPost3,
  },
];

export const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReadMore = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blog"
      ref={sectionRef}
      className="py-20 md:py-[120px] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-sm uppercase tracking-wider mb-4"
          >
            LATEST INSIGHTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-[56px] font-bold text-white mb-5"
          >
            From My Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 font-light max-w-[700px] mx-auto"
          >
            Insights, tutorials, and reflections on modern development practices, design thinking, and emerging technologies in the digital landscape.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => handleReadMore(post.url)}
              className="group bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(255,107,53,0.25)] hover:-translate-y-3 transition-all duration-[400ms] ease-out cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-t-[32px]">
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-6 right-6 z-10 flex gap-1">
                  <span className="inline-block px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {post.date.month}
                  </span>
                  <span className="inline-block px-3 py-1.5 bg-white text-black text-xs font-bold rounded-full">
                    {post.date.day}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 bg-white">
                <h3 className="text-[28px] font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-base font-light text-black/70 mb-6 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-black/60">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(post.url);
                    }}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => window.open("https://zencode002.hashnode.dev/", "_blank", "noopener,noreferrer")}
            className="group px-8 py-3.5 border-2 border-primary text-primary bg-transparent rounded-[32px] font-medium hover:bg-primary hover:text-white hover:scale-105 transition-all duration-[400ms] ease-out flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};