import { SvgIcon, SvgIconProps } from "../atoms/SvgIcon/SvgIcon";

export const Download = (props: SvgIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
      stroke="currentColor"
      fill="currentColor"
    />
  </SvgIcon>
);
