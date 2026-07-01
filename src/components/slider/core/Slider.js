import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export default function Slider({ config, renderItem }) {
  if (!config || !Array.isArray(config.items) || config.items.length === 0) {
    return null;
  }

  // 프로젝트 데이터의 responsive -> Swiper breakpoints 변환
  const breakpoints = config.responsive
    ? {
        0: {
          slidesPerView:
            config.responsive.mobile?.slidesPerView ??
            config.swiper?.slidesPerView,
          spaceBetween:
            config.responsive.mobile?.spaceBetween ??
            config.swiper?.spaceBetween,
        },
        768: {
          slidesPerView:
            config.responsive.tablet?.slidesPerView ??
            config.swiper?.slidesPerView,
          spaceBetween:
            config.responsive.tablet?.spaceBetween ??
            config.swiper?.spaceBetween,
        },
        1024: {
          slidesPerView:
            config.responsive.desktop?.slidesPerView ??
            config.swiper?.slidesPerView,
          spaceBetween:
            config.responsive.desktop?.spaceBetween ??
            config.swiper?.spaceBetween,
        },
      }
    : undefined;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={config.swiper?.slidesPerView ?? 2}
      spaceBetween={config.swiper?.spaceBetween ?? 20}
      loop={config.swiper?.loop ?? false}
      breakpoints={breakpoints}
    >
      {config.items.map((item) => (
        <SwiperSlide key={item.id}>
          {renderItem ? renderItem(item) : <div>{item.year || item.title}</div>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
