// // utils/scrollData.js

// export const toScrollData = (lines, className = "subPageTxt") => ({
//   groups: [
//     {
//       className,
//       lines,
//       lineGap: 12,
//       charDelay: 0.02,
//     },
//   ],
// });

// export const toScrollData = (
//   lines,
//   { className = "subPageTxt", lineGap = 12, charDelay = 0.02 } = {},
// ) => ({
//   groups: [
//     {
//       className,
//       lines,
//       lineGap,
//       charDelay,
//     },
//   ],
// });

export const toScrollData = (
  lines = [],
  { className = "subPageTxt", lineGap = 12, charDelay = 0.02 } = {},
) => ({
  groups: [
    {
      className,
      lines: Array.isArray(lines) ? lines : [lines],
      lineGap,
      charDelay,
    },
  ],
});
