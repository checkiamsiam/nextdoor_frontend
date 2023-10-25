import { Hidden, Stack } from "@mui/material";
import Image from "next/image";

const NotFound = () => {
  return (
    <Stack width="100%" minHeight="100vh" direction="row" justifyContent="center" alignItems="center">
      <Hidden smUp>
        <Image src="/svgs/nextdoor-not-found.svg" alt="next door not found page" width={330} height={330} />
      </Hidden>
      <Hidden smDown>
        <Image src="/svgs/nextdoor-not-found.svg" alt="next door not found page" width={550} height={550} />
      </Hidden>
    </Stack>
  );
};

export default NotFound;
