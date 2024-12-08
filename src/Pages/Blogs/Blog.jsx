import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './Blog.css';
import BlogCard from '../../components/BlogCard/BlogCard';
export default function Blog() {
  const pagePerView = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/Data/blogs.json');
      const data = await response.json();
      setBlogPosts(data);
    };
    fetchBlogPosts();
  },[])
  function handlePageChange(page) {
    setCurrentPage(page);
  }


  const totalPages = Math.ceil(blogPosts.length / pagePerView);
  const indexOfLastPost = currentPage * pagePerView;
  const indexOfFirstPost = indexOfLastPost - pagePerView;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="max-w-6xl mx-auto py-8 md:my-12">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
          Blog <span className="text-[#675C9C] ">Corner</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-3 md:mx-0">
        {currentPosts.map(blog => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <div className="mt-4 md:mt-8 mx-3 md:mx-0">
        <ResponsivePagination
          total={totalPages}
          current={currentPage}
          nextLabel="Next"
          previousLabel="Previous"
          onPageChange={page => handlePageChange(page)}
        />
      </div>
    </div>
  );
}
