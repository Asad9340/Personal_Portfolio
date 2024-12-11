/* eslint-disable react/prop-types */

import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <Link to="#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="Noteworthy technology acquisitions"
          />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {blog?.title?.length > 25
                ? `${blog.title.slice(0, 25)}...`
                : blog?.title}
            </h5>
          </Link>
          <p className="text-gray-500 text-sm mb-2">
            {blog?.time
              ? new Date(blog.time).toLocaleString()
              : 'Time not available'}
          </p>
          <p className="font-normal text-gray-700 mb-3">
            {blog?.content?.length > 40
              ? `${blog.content.slice(0, 40)}...`
              : blog?.content}
          </p>
          <button className="flex items-center gap-1 button">
            <FaArrowRightLong />

            <div className="text-xs font-semibold">Read More</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
