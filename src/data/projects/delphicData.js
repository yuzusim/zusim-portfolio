export const delphicData = {
  id: 1,
  title: "DELPHIC",

  intro: {
    mainTxt: "'차의 경계를 넘다'",
    subTxt: "Responsive Web Redesign",
  },

  background: {
    type: "image",
    value: "/images/projects/delphic/del_mv_2.jpg",
    overlay: 0.6,
  },

  // overview
  overview: {
    title: {
      left: "OVER",
      right: "VIEW",
    },
    description: [
      "델픽(Delphic)은 차와 다도 문화를 기반으로 브랜드 철학과",
      "라이프 스타일을 제안하는 프리미엄 티 브랜드입니다.",
      "차, 다도 도구, 공예 작품 등 다양한 콘텐츠를 통해 차 문화를 현대적인 감성으로",
      "재해석하며 브랜드만의 경험을 전달하고 있습니다.",
    ],

    summary: {
      title: "SUMMARY",

      items: [
        {
          title: "DATE",
          content: "2025. 06 – 2025. 07",
        },
        {
          title: "ROLE",
          content: ["UI/UX DESIGN", "PUBLISHING"],
        },
        {
          title: "TOOLS",
          content: "Figma / HTML / SCSS / JS",
        },
      ],
    },

    story: {
      title: "STRATEGY",
      description:
        "브랜드 스토리와 차 문화를 효과적으로 전달하기 위해 상품 중심의 정보 구조에서 벗어나 브랜드 경험 중심의 랜딩 페이지를 기획했습니다. Horizontal Flow를 적용하여 콘텐츠가 하나의 흐름처럼 이어지도록 구성하고, 브랜드의 철학과 감성을 자연스럽게 경험할 수 있도록 설계했습니다.",
    },

    link: "https://delpic-renewal.vercel.app/",
  },

  // uiux approach
  approach: {
    background: {
      type: "image",
      value: "/images/projects/delphic/del_mv_1.jpg",
      overlay: 0.6,
    },

    txt: "UI/UX DESIGN EXPERIENCE",
    title: "'차의 경계를 넘다'",

    items: [
      {
        number: "01",
        title: "Brand Experience",
        description: [
          "브랜드의 철학과 차 문화를 중심으로 콘텐츠를 구성하여 사용자가 브랜드의 가치와 무드를 자연스럽게 경험할 수 있도록 했습니다.",
        ],
      },
      {
        number: "02",
        title: "Horizontal Flow",
        description: [
          "가로 스크롤 인터랙션을 적용하여 사용자가 브랜드 스토리를 자연스럽게 따라가며 콘텐츠를 하나의 흐름처럼 경험할 수 있도록 했습니다.",
        ],
      },
      {
        number: "03",
        title: "Content Flow",
        description: [
          "브랜드 스토리부터 티 문화 그리고 제품까지 콘텐츠가 자연스럽게 연결될 수 있도록 구성하여 사용자가 브랜드 경험을 단계적으로 이해할 수 있도록 설계했습니다.",
        ],
      },
      {
        number: "04",
        title: "Responsive Structure",
        description: [
          "Desktop과 Mobile 환경에 맞춰 콘텐츠 흐름과 정보 구조를 최적화하여 일관된 브랜드 경험을 제공할 수 있도록 했습니다.",
        ],
      },
    ],
  },

  mockup: {
    pc: {
      stagger: {
        subtitle: "델픽은 동시대 문화와 예술을 지지하고 차 문화를 선도합니다.",
        sectionTxt: [
          "차 문화 속에 오랜 시간 자리 잡고 있는 다양한 동서양의 구분이나 다도의 격식과 같은 경계를 넘나들며 장벽을 허물고 누구나 쉽게 즐길 수 있는 차 문화를 이끌고자 합니다. 차를 편안하게 즐기며 개인의 취향과 기호에 맞게 자신만의 차 문화를 완성해 나가는 것을 지향합니다.",
        ],

        floating: [
          {
            id: 1,
            src: "/images/del_mockup_1.jpg",
            alt: "Delphic Main Hero Section",
            className: "skew-left",
            position: "top-left",
            delay: 0.2,
            speed: 1.1,
          },

          {
            id: 2,
            src: "/images/del_mockup_2.jpg",
            alt: "Brand Story Section",
            className: "skew-right",
            position: "top-right",
            delay: 0.35,
            speed: 1.2,
          },

          {
            id: 3,
            src: "/images/del_mockup_3.jpg",
            alt: "Tea Product Grid",
            className: "skew-left",
            position: "bottom-left",
            delay: 0.5,
            speed: 1.05,
          },

          {
            id: 4,
            src: "/images/del_mockup_4.jpg",
            alt: "Horizontal Flow Section",
            className: "skew-right",
            position: "bottom-right",
            delay: 0.65,
            speed: 1.15,
          },
          {
            id: 5,
            src: "/images/del_mockup_5.jpg",
            alt: "Horizontal Flow Section",
            className: "skew-right",
            position: "bottom-right",
            delay: 0.65,
            speed: 1.15,
          },
          {
            id: 6,
            src: "/images/del_mockup_6.jpg",
            alt: "Horizontal Flow Section",
            className: "skew-right",
            position: "bottom-right",
            delay: 0.65,
            speed: 1.15,
          },
        ],
      },

      showcase: {
        // title: ["당신을 위한", "Mercedes-Benz를", "만나보세요"],

        // title: {
        //   lines: ["당신을 위한", "Mercedes-Benz를 만나보세요."],
        //   color: "#fff",
        // },

        background: {
          type: "image",
          value: "/images/bg_delphic.jpg",
          overlay: 0.6,

          images: [
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
        },
      },

      gallery: {},
    },

    mobile: {
      showcase: {
        // rotate: true, // 회전 여부
        images: [
          {
            src: "/images/projects/delphic/del_m_mockup_1.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_4.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_8.jpg",
            size: "medium",
            column: 1,
          },

          {
            src: "/images/projects/delphic/del_m_mockup_7.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_2.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_5.jpg",
            size: "medium",
            column: 2,
          },

          {
            src: "/images/projects/delphic/del_m_mockup_3.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_6.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/delphic/del_m_mockup_4.jpg",
            size: "medium",
            column: 3,
          },
        ],
      },

      gallery: {},
    },

    tablet: {
      showcase: {
        images: [
          {
            src: "/images/projects/delphic/del_t_mockup_1.jpg",
            size: "medium",
            row: 1,
          },
          {
            src: "/images/projects/delphic/del_t_mockup_2.jpg",
            size: "medium",
            row: 1,
          },
          {
            src: "/images/projects/delphic/del_t_mockup_3.jpg",
            size: "medium",
            row: 1,
          },
          {
            src: "/images/projects/delphic/del_t_mockup_4.jpg",
            size: "medium",
            row: 1,
          },
          {
            src: "/images/projects/delphic/del_t_mockup_5.jpg",
            size: "medium",
            row: 1,
          },
          {
            src: "/images/projects/delphic/del_t_mockup_6.jpg",
            size: "medium",
            row: 1,
          },
        ],
      },
    },
  },

  interaction: {
    slider: {
      basic: {},
      hover: {},
    },
  },

  // design system
  designSystem: {
    title: "DESIGN SYSTEM",

    cards: [
      {
        type: "font",
        family: "'Red Rose'",
        title: "Red Rose",

        preview: "Aa",

        weights: ["Bold", "Regular", "Light"],
      },

      {
        type: "font",
        family: "'Noto Sans KR', serif",
        title: "Noto Sans KR",

        preview: "Aa",

        weights: ["Bold", "Regular", "Light"],
      },

      {
        type: "color",

        colors: ["#FFFFFF", "#D2D2D2", "#000000"],
      },

      {
        type: "responsive",
        title: "Responsive",

        devices: [
          {
            icon: "desktop",
            title: "Desktop",
            value: "1800px",
          },
          {
            icon: "mobile",
            title: "Mobile",
            value: "iPhone 15 Pro",
          },
        ],
      },
    ],
  },
};
