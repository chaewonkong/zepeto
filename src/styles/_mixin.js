// Color sets
export const colors = {
  defaultColor: "#000033",
  blackColor: "#222222",
  purpleBlueColor: "#000033",
  pastelBlueColor: "#25365d",
  greyColor: "#ccc",
  darkGreyColor: "#606060",
  redColor: "#f44336"
};

// sizes for media queries
const sizes = {
  desktop: 922,
  tablet: 768,
  phone: 576
};

// font sizes
export const fontSize = {
  smallFontSize: "0.6rem",
  normalFontSize: "0.8rem",
  largeFontSize: "1.2rem",
  extraLargeFontSize: "2rem",
  superLargeFontSize: "3rem"
};

export const headerHeight = "3rem";

export const color = { bgColor: "#141414", fontColor: "#000" };

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(sizes.desktop),
  tablet: customMediaQuery(sizes.tablet),
  phone: customMediaQuery(sizes.phone)
};
