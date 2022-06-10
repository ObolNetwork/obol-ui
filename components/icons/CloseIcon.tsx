import { SvgIcon, SvgIconProps } from "../atoms/SvgIcon/SvgIcon";

export const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon width="28" height="26" viewBox="0 0 28 26" {...props}>
    <path
      d="M2 24L26 2M2 2L26 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </SvgIcon>
);
