import { colors } from "./colors";

const commonTextStyles = `
  letter-spacing: 0.2px;
  line-height: 1.25;
`;

const itemMarginRight = `30px`;
const scrollWidth = `10px`;
const scrollBorderRadius = `10px`;

const verticalScroll = `
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: ${scrollWidth};
    background-color: ${colors.scrollBgcFloor};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${scrollBorderRadius};
    background-color: ${colors.scrollThumb};
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${colors.scrollShadow};
    border-radius: ${scrollBorderRadius};
    background-color: ${colors.scrollMainBgc};
  }
`;

export const allStyles = {
  colors,
  styles: {
    commonTextStyles,
    itemMarginRight,
    verticalScroll,
  },
};
