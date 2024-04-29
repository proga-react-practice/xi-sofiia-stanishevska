import { Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface TitleProps {
  icon: SvgIconComponent;
  title: string;
}

export default function Title({ icon: Icon, title }: TitleProps) {
  return (
    <Typography
      variant="h2"
      sx={{
        my: 4,
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon sx={{ marginRight: 1, fontSize: "2rem" }} />
      {title}
    </Typography>
  );
}
