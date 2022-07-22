import { Box, Link } from "../../atoms";

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
  let count = items.filter((item) => item.status === "complete").length;
  const offset = 100 / items.length / 2;
  const width = (100 / items.length) * count + offset;
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
            gridTemplateColumns: `repeat(${items.length || 1}, 1fr)`,
          }}
        >
          {items.map((item, index) => (
            <Link
              disabled={item.status === "incomplete"}
              href={item.status === "incomplete" ? "#" : item.href}
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
