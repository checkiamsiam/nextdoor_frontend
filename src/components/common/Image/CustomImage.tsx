import { Box, SxProps } from "@mui/material";
import Image from "next/image";

type IProps = {
  src: string;
  alt: string;
  ratio: string;
  priority?: boolean;
  sx?: SxProps;
  onClick?: () => void;
  blurDataURL?: string;
  placeholder?: string;
};

const CustomImage = ({
  src,
  alt,
  ratio,
  priority = false,
  sx,
  onClick,
  placeholder,
  blurDataURL,
}: IProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          aspectRatio: ratio,
          overflow: "hidden",
          ...sx,
        }}
        onClick={onClick}
      >
        <Image
          src={src}
          alt={alt || "image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL || "/images/placeholder.jpg"}
        />
      </Box>
    </>
  );
};

export default CustomImage;
