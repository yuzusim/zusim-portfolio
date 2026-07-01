export const historySlider = {
  type: "history",

  title: ["자동차의 시작,", "138년의 혁신"],
  text: [
    "138년간의 개척 정신과 혁신을 이어 받아 순수 전기 시대를 선도하는 메르세데스-벤츠는 단순 이동 수단이 아닌 그 이상을 제공합니다.",
  ],

  background: "#000",

  swiper: {
    slidesPerView: 2.5,
    spaceBetween: 35,
    loop: true,
  },

  responsive: {
    mobile: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    tablet: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    desktop: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },

  items: [
    //     {
    //   id: 1,
    //   year: "1950",
    //   title: "The Legend Begins",
    //   subtitle: "Benz 50's",
    //   logo: "/images/projects/benz/Benz_logo.png",
    //   image: "/images/projects/benz/slider_1.png",
    // }

    {
      id: 1,
      year: "1950",
      text: ["The Legend", "Begins"],
      img: "/images/projects/benz/slider_1.png",
      afterText: "Benz 50's",
      beforeImg: "/images/projects/benz/Benz_logo.png",
    },
    {
      id: 2,
      year: "1954",
      text: ["Wings of", "Innovation"],
      img: "/images/projects/benz/slider_2.png",
      afterText: "Benz 50’s",
      beforeImg: "/images/projects/benz/Benz_logo.png",
    },
    {
      id: 3,
      year: "2025",
      text: ["Vision", "One-Eleven"],
      img: "/images/projects/benz/slider_3.png",
      afterText: "Benz 2025",
      beforeImg: "/images/projects/benz/Benz_logo.png",
    },
  ],
};
