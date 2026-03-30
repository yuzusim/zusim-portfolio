export const mainProjectData = [
  {
    id: 1,
    title: "DELPHIC",
    visualType: "delphic",
    desc: ["UI/UX", "Responsive Web Redesign"],
    bgType: "image", // "image" | "color"
    bg: "/images/bg_delphic.jpg", // 전체 배경

    mockup: [
      { src: "/images/del_mockup_1.jpg", size: "medium", row: 1 },
      { src: "/images/del_mockup_2.jpg", size: "medium", row: 1 },
      { src: "/images/del_mockup_3.jpg", size: "medium", row: 1 },
      { src: "/images/del_mockup_4.jpg", size: "medium", row: 1 },

      { src: "/images/del_mockup_4.jpg", size: "medium", row: 2 },
      { src: "/images/del_mockup_5.jpg", size: "medium", row: 2 },
      { src: "/images/del_mockup_6.jpg", size: "medium", row: 2 },
      { src: "/images/del_mockup_1.jpg", size: "medium", row: 2 },

      { src: "/images/del_mockup_4.jpg", size: "medium", row: 3 },
      { src: "/images/del_mockup_2.jpg", size: "medium", row: 3 },
      { src: "/images/del_mockup_3.jpg", size: "medium", row: 3 },
      { src: "/images/del_mockup_1.jpg", size: "medium", row: 3 },
    ],

    link: "https://yuzusim.github.io/Delpic_Renewal/",
  },

  {
    id: 2,
    title: "BENZ",
    visualType: "benz",
    desc: ["UI/UX", "Responsive Web Redesign"],
    bgType: "color",
    // bg: "#000000",
    bg: "linear-gradient(135deg, #000, #be0b0b)",

    mockup: {
      base: "/images/benz_mockup_1.png",
      floating: [
        {
          src: "/images/benz_mockup_3.jpg",
          class: "skew-1",
          position: "position-1",
          delay: 0.3,
        },
        {
          src: "/images/benz_mockup_5.jpg",
          class: "skew-2",
          position: "position-2",
          delay: 0.8,
        },
      ],
    },

    // link: "/projects/delphic",
  },
  {
    id: 3,
    title: "DISNEY",
    visualType: "disney",
    desc: ["UX/UI", "React 기반 SPA 프로젝트"],
    bgType: "image",
    bg: "/images/bg_disney.jpg",
    overlay: true,

    mockup: [
      { src: "/images/mockup_3-1.png", class: "left", size: "disney-medium" },
      { src: "/images/mockup_3-2.png", class: "right", size: "disney-medium" },
    ],

    // link: "/projects/delphic",
  },

  // {
  //   id: 4,
  //   title: "Swan Bellet App",
  //   visualType: "Bellet App",
  //   desc: ["UI/UX", "Swan Bellet App  Design"],

  //   mockup: [{ src: "/images/mockup_3.png", size: "benz-large" }],
  //   bgType: "color",
  //   bg: "linear-gradient(180deg, #6023F0, #8A2ED7, #8A2ED7)",
  // },
];
