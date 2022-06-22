import { styled } from "../../../stitches.config";
import { Box, Link, Text } from "../../atoms";
import { AlertIcon, ArrowForward } from "../../icons";

export const NotificationContainer = styled(Box, {
  backgroundColor: "$bg03",
  borderRadius: "$1",
  display: "flex",
  gap: "$xs",
  p: "$md",
});

export interface NotificationCardProps {
  heading: string;
  subHeading?: string;
  link?: string;
  linkText?: string;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  heading,
  subHeading,
  link,
  linkText = "More on Charon",
}) => (
  <NotificationContainer>
    <Box>
      <AlertIcon size="lg" color="body" />
    </Box>
    <Box css={{ display: "flex", fd: "column", gap: "$sm" }}>
      <Box css={{ display: "flex", fd: "column", gap: "$xs" }}>
        <Text variant="body">{heading}</Text>
        {subHeading && (
          <Text css={{ color: "$textLight", fontSize: "$3" }}>
            {subHeading}
          </Text>
        )}
      </Box>
      {link && (
        <Link target="_blank" href={link}>
          {linkText}
          <ArrowForward size="md" />
        </Link>
      )}
    </Box>
  </NotificationContainer>
);
