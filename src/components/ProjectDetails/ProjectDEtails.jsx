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
      <div className='text-center my-4 md:my-6'>
        <h2 className="text-3xl md:text-5xl ">
          Project Title:{' '}
          <span className="font-semibold md:font-extrabold">
            <span className="text-[#DC143C]">S</span>tay Vista
          </span>
        </h2>
      </div>
      <div>
        <ImageCarousel images={images} />
      </div>
      <div>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iusto ipsa non voluptatem unde magnam nulla nam reiciendis cumque. Minima, cumque expedita. Harum modi id vitae quod veniam totam minus deleniti nesciunt, sed praesentium doloribus, nobis aliquid repudiandae perspiciatis obcaecati tempora tempore voluptatibus, quidem facere iure dignissimos distinctio! Consequatur neque fugiat aliquam dolorem quaerat commodi? Eos magnam facere quas sint earum aperiam rerum, dignissimos ducimus praesentium repudiandae esse sapiente explicabo eaque commodi itaque tenetur hic cupiditate provident, error dicta? Vero accusamus quo dicta assumenda esse commodi quae tempora non molestias sequi, quisquam quod itaque officia laudantium iure minus alias! Temporibus?</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
