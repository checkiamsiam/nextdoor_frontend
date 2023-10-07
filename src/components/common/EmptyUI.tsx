import { Box, SxProps, Typography } from "@mui/material";
import Image from "next/image";

type IProps = {
  title: string;
  sx?: SxProps;
};

const EmptyUI = ({ title, sx }: IProps) => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        boxShadow: "none",
        ...sx,
      }}
    >
      <Image
        src="/icons/empty-box.png"
        alt="empty"
        priority
        width={150}
        height={150}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "600",
        }}
      >
        {title || "No data found"}
      </Typography>
    </Box>
  );
};

export default EmptyUI;
