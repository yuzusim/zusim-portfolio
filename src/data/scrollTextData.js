// src/data/scrollText.js

export const scrollTextData = {
  main: {
    startOffset: 0.8, // 화면의 80% 지점에서 시작
    threshold: 0.2, // 화면의 20% 지점에서 끝
    groups: [
      // {
      //   className: "bigTit",
      //   lines: ["Designing", "The Center", "Between users", "and", "brands."],
      //   // lines: [
      //   //   "Designing",
      //   //   "The Center",
      //   //   "Between",
      //   //   "users",
      //   //   "and",
      //   //   "brands.",
      //   // ],
      //   marginBottom: 50, // 👉 영문 ↔ 한글 간격
      //   lineGap: 16,
      //   charDelay: 0.025,
      // },
      {
        className: "subTit",
        lines: [
          "마음의 중심을 디자인합니다.",
          "사용자와 브랜드 사이의 균형을 고민하며 더 나은 경험을 설계합니다.",
        ],
        lineGap: 12,
        charDelay: 0.025,
      },
    ],
    // threshold: 0.5,
    // startOffset: 200,
  },

  about: {
    groups: [
      {
        // 첫 문단
        className: "paragraphMain",
        lines: ["ZUSIM은 ‘마음의 중심’을 뜻합니다."],
        lineGap: 6, // 줄 간 간격
        marginBottom: 40, // 👈 문단 간격 (여기!)
        charDelay: 0.025,
      },

      {
        // 두 번째 문단
        className: "paragraphSub",
        lines: [
          "좋은 경험은 사용자와 브랜드가 자연스럽게 연결되는",
          "순간에서 시작된다고 믿습니다.",

          "그 연결의 중심을 찾고, 경험으로 구현합니다.",
        ],
        lineGap: 6,
        marginBottom: 40,
        charDelay: 0.025,
      },
    ],
    threshold: 0.5,
    link: "/about",
  },

  work: {
    groups: [
      {
        className: "paragraphMain",
        lines: [
          "다양한 프로젝트를 통해 UI/UX의 본질을 탐구하고",
          "가치를 담아 구현했습니다.",
        ],
        mode: "line",
        lineGap: 10,
        // charDelay: 0.03,
      },
    ],

    mockup: [
      { src: "/images/work/work_1.jpg", size: "medium", row: 1 },
      { src: "/images/work/work_2.jpg", size: "medium", row: 1 },
      { src: "/images/work/work_3.jpg", size: "medium", row: 1 },
      { src: "/images/work/work_4.jpg", size: "medium", row: 1 },

      // { src: "/images/work/work_5.jpg", size: "medium", row: 2 },
      // { src: "/images/work/work_6.jpg", size: "medium", row: 2 },
      { src: "/images/work/work_7.jpg", size: "medium", row: 2 },
      { src: "/images/work/work_8.jpg", size: "medium", row: 2 },
      { src: "/images/work/work_9.jpg", size: "medium", row: 2 },
      { src: "/images/work/work_10.jpg", size: "medium", row: 2 },

      { src: "/images/work/work_11.jpg", size: "medium", row: 3 },
      { src: "/images/work/work_12.jpg", size: "medium", row: 3 },
      { src: "/images/work/work_13.jpg", size: "medium", row: 3 },
      { src: "/images/work/work_14.jpg", size: "medium", row: 3 },

      { src: "/images/work/work_15.jpg", size: "medium", row: 4 },
      { src: "/images/work/work_16.jpg", size: "medium", row: 4 },
      { src: "/images/work/work_1.jpg", size: "medium", row: 4 },
      { src: "/images/work/work_2.jpg", size: "medium", row: 4 },
    ],

    threshold: 0.4,
    link: "/work",
  },

  contact: {
    groups: [
      {
        className: "paragraphText",
        lines: [
          "좋은 경험은 함께 고민하는 것에서 시작됩니다.",
          "당신과 함께 더 나은 경험을 만들어가고 싶습니다.",
        ],
        mode: "line",
        lineGap: 10,
        // charDelay: 0.03,
      },
    ],
    threshold: 0.4,
  },
};
