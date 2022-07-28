import { Box, Link } from "../../atoms";
import { useEffect, useState } from "react";

export interface StepProps {
  id: string | number;
  title: string;
  href: string;
  status: "complete" | "incomplete" | "current";
  rank?: number;
}

interface ProgressTrackerProps {
  items: StepProps[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ items }) => {
  const [steps, setSteps] = useState(items);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const _count = items.filter((item) => item.status === "complete").length;
    const offset = 100 / items.length / 2;
    const width = (100 / items.length) * _count + offset;
    setWidth(width);
    setSteps(items);
  }, [items]);
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
              width: `${width > 100 ? 100 : width}%`,
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
            display: "grid",
            gridTemplateColumns: `repeat(${steps.length || 1}, 1fr)`,
          }}
        >
          {steps.map((item, index) => (
            <Link
              disabled={item.status === "incomplete"}
              href={item.href}
              key={`:l${index}`}
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                textAlign: "center",
              }}
            >
              {item.title}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
