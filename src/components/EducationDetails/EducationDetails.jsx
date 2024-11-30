import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import EducationSSC from '../EducationSSC/EducationSSC';
import EducationHSC from '../EducationHSC/EducationHSC';
import EducationHonours from '../EducationHonours/EducationHonours';

const EducationDetails = () => {
  const [mousewheelEnabled, setMousewheelEnabled] = useState(true); // State to control mousewheel

  const handleSlideChange = swiper => {
    // Disable mousewheel on the first or last slide
    if (
      swiper.activeIndex === 0 ||
      swiper.activeIndex === swiper.slides.length - 1
    ) {
      setMousewheelEnabled(false);
    } else {
      setMousewheelEnabled(true);
    }
  };

  return (
    <div className="h-full md:h-[400px] my-6 md:my-12 bg-gray-100 flex items-center justify-center">
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={mousewheelEnabled} // Use state to control mousewheel
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="flex items-center justify-center bg-white text-xl font-semibold rounded-lg">
          <EducationSSC/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-xl font-semibold rounded-lg">
          <EducationHSC/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-xl font-semibold rounded-lg">
          <EducationHonours/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EducationDetails;
