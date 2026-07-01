export const benzData = {
  id: 2,
  slug: "mercedes-benz",

  sections: [
    { type: "section", key: "intro" },
    { type: "section", key: "overview" },
    { type: "section", key: "approach" },
    { type: "section", key: "pcShowcase" },
    { type: "section", key: "textBlock" },
    { type: "slider", key: "history" },
    { type: "section", key: "mobileShowcase" },
    { type: "section", key: "designSystem" },
  ],

  title: {
    text: "Mercedes-Benz",
  },

  intro: {
    mainTxt: "‘전통 위에 혁신을 더하다’",
    subTxt: "Website Renewal Project",
  },

  background: {
    type: "image",
    value: "/images/projects/benz/benz_mv_3.jpg",
    overlay: 0.6,
    // mobilePosition: "0% center",
    // mobileSize: "100%",
  },

  // overview
  overview: {
    title: {
      left: "OVER",
      right: "VIEW",
    },
    description: [
      "메르세데스-벤츠는 130년 이상의 역사를 바탕으로 혁신과 럭셔리를",
      "선도해 온 글로벌 자동차 브랜드입니다.",
      "본 프로젝트는 브랜드의 역사와 철학 주요 모델 및 서비스를",
      "하나의 흐름 속에서 경험할 수 있도록 재구성한 리뉴얼 프로젝트입니다.",
    ],

    summary: {
      title: "SUMMARY",

      items: [
        {
          title: "DATE",
          content: "2025. 07 – 2025. 08",
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
        "기존 벤츠 사이트는 정보가 분산되어 있어 브랜드의 헤리티지와 주요 서비스 경험을 통합적으로 전달하기 어려웠습니다. 브랜드의 역사와 가치를 중심으로 주요 모델과 서비스를 자연스럽게 탐색할 수 있도록 콘텐츠 흐름을 재구성하여 프리미엄 브랜드 경험을 강화하고자 했습니다.",
    },

    link: "https://benz-renewal.vercel.app/",
  },

  // uiux approach
  approach: {
    background: {
      type: "image",
      value: "/images/projects/benz/benz_mv_5.jpg",
      overlay: 0.6,
    },

    txt: "UI/UX DESIGN EXPERIENCE",
    title: "‘전통 위에 혁신을 더하다’",

    items: [
      {
        number: "01",
        title: "Visual Navigation",
        description: [
          "메인 썸네일 선택 시 비주얼 콘텐츠가 즉시 변경되도록 구성하여 사용자가 관심 있는 모델을 능동적으로 탐색할 수 있도록 했습니다.",
        ],
      },
      {
        number: "02",
        title: "Heritage Storytelling",
        description: [
          "130년 이상의 브랜드 헤리티지를 인터랙티브 타임라인으로 재구성하여 벤츠의 역사와 혁신 과정을 몰입감 있게 전달했습니다.",
        ],
      },
      {
        number: "03",
        title: "Model Exploration",
        description: [
          "탭 기반 인터페이스를 적용해 다양한 모델 정보를 한 화면에서 효율적으로 비교하고 탐색할 수 있도록 구성했습니다.",
        ],
      },
      {
        number: "04",
        title: "Service Engagement",
        description: [
          "서비스 정보와 멤버십 가입 요소를 연결하여 브랜드 경험이 구매 이후까지 자연스럽게 이어질 수 있도록 했습니다.",
        ],
      },
    ],
  },

  mockup: {
    pc: {
      showcase: {
        title: {
          lines: ["당신을 위한", "Mercedes-Benz를", "만나보세요."],
          color: "#fff",
        },

        rotate: {
          angle: 45,
        },

        background: {
          type: "gradient",
          value: "linear-gradient(135deg, #000, #be0b0b)",
          overlay: 0.6,

          images: [
            {
              src: "/images/projects/benz/benz_pc_mockup_1.jpg",
              size: "medium",
              row: 1,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_2.jpg",
              size: "medium",
              row: 1,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_3.jpg",
              size: "medium",
              row: 1,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_4.jpg",
              size: "medium",
              row: 1,
            },

            {
              src: "/images/projects/benz/benz_pc_mockup_5.jpg",
              size: "medium",
              row: 2,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_6.jpg",
              size: "medium",
              row: 2,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_7.jpg",
              size: "medium",
              row: 2,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_4.jpg",
              size: "medium",
              row: 2,
            },

            {
              src: "/images/projects/benz/benz_pc_mockup_1.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_2.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_3.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_4.jpg",
              size: "medium",
              row: 3,
            },

            {
              src: "/images/projects/benz/benz_pc_mockup_5.jpg",
              size: "medium",
              row: 4,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_6.jpg",
              size: "medium",
              row: 4,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_7.jpg",
              size: "medium",
              row: 4,
            },
            {
              src: "/images/projects/benz/benz_pc_mockup_4.jpg",
              size: "medium",
              row: 4,
            },
          ],
        },
      },

      gallery: {},

      textBlock: {
        title: [
          "The history of Mercedes-Benz",
          "People, milestones, motorsport.",
        ],
        txt: "메르세데스-벤츠는 시대를 초월한 디자인, 최첨단 기술과 디테일에 대한 관심을 바탕으로 한 흥미로운 경험을 의미합니다.",

        background: {
          type: "color",
          color: "#000",
          overlay: 0.6,
        },
      },
    },

    mobile: {
      showcase: {
        background: {
          type: "gradient", // image | gradient | color | none
          value: "linear-gradient(135deg, #000, #be0b0b)",

          // color: "#111827",
        },

        fade: {
          enabled: true,
        },

        axis: "column",

        images: [
          {
            src: "/images/projects/benz/benz_m_mockup_6.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_2.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_8.jpg",
            size: "medium",
            column: 1,
          },

          {
            src: "/images/projects/benz/benz_m_mockup_10.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_1.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_9.jpg",
            size: "medium",
            column: 2,
          },

          {
            src: "/images/projects/benz/benz_m_mockup_3.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_5.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/benz/benz_m_mockup_7.jpg",
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

  // design system
  designSystem: {
    title: "DESIGN SYSTEM",

    cards: [
      {
        type: "font",
        family: "'Roboto Slab'",
        title: "Roboto Slab",

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

        colors: ["#FFFFFF", "#D2D2D2", "#A9A9A9", "#808080", "#000000"],
        gradient: {
          background: "linear-gradient(135deg,#56DBAC,#00FFFF)",
          colors: ["#56DBAC", "#00FFFF"],
        },
      },

      {
        type: "responsive",
        title: "Responsive",

        devices: [
          {
            icon: "desktop",
            title: "Desktop",
            value: "1920px",
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
