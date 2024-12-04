import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ProjectDetails = () => {
  const images = [
    'https://i.postimg.cc/VkVz835X/profile.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
  ];

  return (
    <div className="max-w-6xl mx-auto rounded-l-lg my-4 md:my-8">
      {/* Title Section */}
      <div className="text-center my-4 md:my-6">
        <h2 className="text-3xl md:text-5xl ">
          Project Title:{' '}
          <span className="font-semibold md:font-extrabold">
            <span className="text-[#DC143C]">S</span>tay Vista
          </span>
        </h2>
      </div>

      {/* Image Carousel */}
      <div>
        <ImageCarousel images={images} />
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-bold text-lg">Description:</span> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illum, iusto ipsa non
          voluptatem unde magnam nulla nam reiciendis cumque. Minima, cumque
          expedita. Harum modi id vitae quod veniam totam minus deleniti
          nesciunt, sed praesentium doloribus, nobis aliquid repudiandae
          perspiciatis obcaecati tempora tempore voluptatibus, quidem facere
          iure dignissimos distinctio! Consequatur neque fugiat aliquam dolorem
          quaerat commodi?
        </p>
      </div>

      {/* Project Highlights */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Project Highlights</h3>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
          <li>Responsive design optimized for all devices</li>
          <li>Interactive carousel for showcasing property images</li>
          <li>Intuitive UI with a focus on user experience</li>
          <li>Integrated real-time booking system</li>
          <li>Technologies: React, Swiper.js, Tailwind CSS</li>
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Technologies Used</h3>
        <div className="flex flex-wrap gap-4 mt-4">
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow text-gray-700">
            React
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow text-gray-700">
            Tailwind CSS
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow text-gray-700">
            Swiper.js
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow text-gray-700">
            JavaScript (ES6+)
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg shadow text-gray-700">
            Netlify
          </span>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Project Links</h3>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            href="https://example-live-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-center shadow hover:bg-blue-600"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/yourgithub/stay-vista"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center shadow hover:bg-gray-900"
          >
            View Code on GitHub
          </a>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">
          Additional Features
        </h3>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
          <li>Dark mode toggle for better accessibility</li>
          <li>SEO optimization for improved discoverability</li>
          <li>Faster page loads with optimized assets</li>
          <li>Backend API integration for dynamic content</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
