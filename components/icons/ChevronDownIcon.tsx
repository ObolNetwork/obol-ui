import { SvgIcon, SvgIconProps } from "../atoms/SvgIcon/SvgIcon";

export const ChevronDownIcon = (props: SvgIconProps) => (
  <SvgIcon
    {...props}
    width="19"
    height="11"
    viewBox="0 0 19 11"
    fillColor={false}
    size="inherit"
  >
    <path d="M1.5 1L9.5 9L17.5 1" stroke="currentColor" strokeWidth="2" />
  </SvgIcon>
);
