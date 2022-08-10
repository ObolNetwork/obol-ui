import { SvgIcon, SvgIconProps } from "../atoms/SvgIcon/SvgIcon";

export const ArrowBackword = (props: SvgIconProps) => (
  //   <SvgIcon {...props}>
  //     <path d="M9 19L10.41 17.59L5.83 13H22V11H5.83L10.42 6.41L9 5L2 12L9 19Z" />
  //   </SvgIcon>

  //ask Edax why the above svgIcon is not centered and dont forget to add size="lg" strokeColor="false"
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 19L10.41 17.59L5.83 13H22V11H5.83L10.42 6.41L9 5L2 12L9 19Z"
      fill="#9CC2C9"
    />
  </svg>
);
