import { useState } from "react";
import { Box, Link } from "../../atoms";

interface LinkItemProps {
  title: string;
  href: string;
  status: "complete" | "incomplete";
}

interface ProgressTrackerProps {
  items: LinkItemProps[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = (props) => {
  const [items, setItems] = useState<LinkItemProps[]>(props.items);

  return (
    <Box css={{ backgroundColor: "$bg02", py: "$3xl", px: "$6xl" }}>
      <Box css={{ display: "flex", fd: "column", gap: "$md" }}>
        <Box
          className="progress-bar-behind"
          css={{
            height: "$xxs",
            borderRadius: "$3",
            backgroundColor: "$progressTrackerGreen",
            position: "relative",
            width: "$full",
          }}
        >
          <Box
            css={{
              display: "grid",
              placeItems: "end",
              height: "$xxs",
              borderRadius: "$3",
              position: "relative",
              width: `calc(100% / ${items.length - 1})`,
            }}
          >
            <Box
              css={{
                display: "grid",
                placeItems: "center",
                position: "absolute",
                width: "28px",
                height: "28px",
                backgroundColor: "$progressTrackerGreen",
                borderRadius: "$round",
                top: "-10px",
                right: "-14px",
              }}
            ></Box>
            <Box
              css={{
                display: "grid",
                placeItems: "end",
                height: "$xxs",
                borderRadius: "$3",
                backgroundColor: "$obolGreen",
                position: "absolute",
                width: "$full",
                "&::after": {
                  content: "",
                  position: "absolute",
                  width: "$sm",
                  height: "$sm",
                  backgroundColor: "$obolGreen",
                  borderRadius: "$round",
                  top: "-4px",
                  right: "-8px",
                },
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          className="link-items"
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {items.map((item, index) => (
            <Link
              disabled={item.status === "incomplete"}
              href={
                item.status === "incomplete" ? "javascript:void(0)" : item.href
              }
              key={`:l${index}`}
            >
              {item.title}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
