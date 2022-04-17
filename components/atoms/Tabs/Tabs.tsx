import { styled } from '../../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    padding: "0 20px",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$textTabInactive",
    userSelect: "none",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.08em",
    cursor: 'pointer',
    "&:hover": { color: "$textTabHover" },
    '&[data-state="active"]': {
      color: "$textLight",
      boxShadow: "inset 0 -2px 0 0 currentColor"
    }
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;