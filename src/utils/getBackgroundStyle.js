export function getBackgroundStyle(background) {
  if (!background) return {};

  switch (background.type) {
    case "image":
      return {
        backgroundImage: `url(${background.value})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      };

    case "gradient":
      return {
        background: background.value,
      };

    case "color":
      return {
        background: background.color,
      };

    default:
      return {};
  }
}
