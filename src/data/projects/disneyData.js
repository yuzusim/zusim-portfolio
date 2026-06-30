export const disneyData = {
  id: 3,
  slug: "disneyplus",

  sections: [
    "intro",
    "overview",
    "approach",
    "pcShowcase",
    "mobileShowcase",
    "designSystem",
  ],

  title: {
    logo: "/images/projects/disneyplus/disney_logo.png",
    // text: "Disney Plus",
  },

  intro: {
    mainTxt: "‘모든 이야기가 시작되는 곳’",
    subTxt: "Website Renewal Project",
  },

  background: {
    type: "image",
    value: "/images/bg_disney.jpg",
    overlay: 0.6,
    //mobilePosition: "0% center",
  },

  // overview
  overview: {
    title: {
      left: "OVER",
      right: "VIEW",
    },
    description: [
      "Disney+는 디즈니, 픽사, 마블, 스타워즈 등 다양한 콘텐츠를 제공하는 ",
      "글로벌 OTT 스트리밍 플랫폼입니다.",
      "본 프로젝트는 콘텐츠 탐색 경험과 구독 전환 흐름을 개선하기 위해 ",
      "주요 콘텐츠 노출 방식과 정보 구조를 재구성한 리뉴얼 프로젝트입니다.",
    ],

    summary: {
      title: "SUMMARY",

      items: [
        {
          title: "DATE",
          content: "2025. 08 – 2025. 10",
        },
        {
          title: "ROLE",
          content: ["UI/UX DESIGN", "PUBLISHING"],
        },
        {
          title: "TOOLS",
          content: "Figma / React / SCSS / JS",
        },
      ],
    },

    story: {
      title: "STRATEGY",
      description:
        "기존 OTT 서비스는 방대한 콘텐츠와 분산된 정보 구조로 인해 사용자가 원하는 콘텐츠를 빠르게 탐색하기 어려웠습니다. 사용자가 콘텐츠를 자연스럽게 발견하고 서비스 혜택과 요금제를 이해한 뒤 구독으로 이어질 수 있도록 콘텐츠 중심의 사용자 흐름을 설계하였습니다.",
    },

    link: "https://disney-renewal.vercel.app/",
  },

  // uiux approach
  approach: {
    background: {
      type: "gradient",
      // value: "linear-gradient(to right, #053E4E 0%, #053E4E 40%, #051828 100%)",
      value: "linear-gradient(135deg, #053E4E, #051828)",
      overlay: 0.6,
    },

    txt: "UI/UX DESIGN EXPERIENCE",
    title: "‘모든 이야기가 시작되는 곳’",

    items: [
      {
        number: "01",
        title: "Capture Interest",
        description: [
          "콘텐츠 비주얼과 로딩 경험을 통해 사용자의 관심과 기대감을 형성하였습니다.",
        ],
      },
      {
        number: "02",
        title: "Discover Content",
        description: [
          "인기 콘텐츠 탐색을 통해 Disney+의 다양한 IP를 경험할 수 있도록 구성하였습니다.",
        ],
      },
      {
        number: "03",
        title: "Understand Value",
        description: [
          "구독 혜택과 서비스의 핵심 가치를 명확하게 전달하였습니다.",
        ],
      },
      {
        number: "04",
        title: "Support Decisiont",
        description: [
          "FAQ를 통해 가입 전 궁금증을 해소하고 자연스러운 구독 결정을 지원하였습니다.",
        ],
      },
    ],
  },

  mockup: {
    pc: {
      showcase: {
        title: {
          lines: ["지금 디즈니+에 가입하고", "스트리밍을 시작하세요. "],
          color: "#fff",
        },

        rotate: {
          angle: 45,
        },

        background: {
          type: "gradient",
          value: "linear-gradient(135deg, #053E4E, #051828)",
          // value: "linear-gradient(to bottom right, #053E4E, #051828)",
          overlay: 0.6,

          images: [
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_3.jpg",
              size: "medium",
              row: 1,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_2.jpg",
              size: "medium",
              row: 1,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_1.jpg",
              size: "medium",
              row: 1,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_4.jpg",
              size: "medium",
              row: 1,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_5.jpg",
              size: "medium",
              row: 2,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_6.jpg",
              size: "medium",
              row: 2,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_2.jpg",
              size: "medium",
              row: 2,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_3.jpg",
              size: "medium",
              row: 1,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_4.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_1.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_3.jpg",
              size: "medium",
              row: 3,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_2.jpg",
              size: "medium",
              row: 3,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_5.jpg",
              size: "medium",
              row: 4,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_3.jpg",
              size: "medium",
              row: 4,
            },

            {
              src: "/images/projects/disneyplus/disney_pc_mockup_6.jpg",
              size: "medium",
              row: 4,
            },
            {
              src: "/images/projects/disneyplus/disney_pc_mockup_2.jpg",
              size: "medium",
              row: 4,
            },
          ],
        },
      },

      gallery: {},
    },

    mobile: {
      showcase: {
        background: {
          type: "none", // image | gradient | color | none

          // color: "#111827",
        },

        fade: {
          enabled: true,
        },

        images: [
          {
            src: "/images/projects/disneyplus/disney_m_mockup_1.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_2.jpg",
            size: "medium",
            column: 1,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_3.jpg",
            size: "medium",
            column: 1,
          },

          {
            src: "/images/projects/disneyplus/disney_m_mockup_4.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_5.jpg",
            size: "medium",
            column: 2,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_3.jpg",
            size: "medium",
            column: 2,
          },

          {
            src: "/images/projects/disneyplus/disney_m_mockup_4.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_5.jpg",
            size: "medium",
            column: 3,
          },
          {
            src: "/images/projects/disneyplus/disney_m_mockup_3.jpg",
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
        family: "'Pretendard '",
        title: "Pretendard",

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

        colors: ["#FFFFFF", "#02D6E8", "#053E4E", "#040714", "#000000"],
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
