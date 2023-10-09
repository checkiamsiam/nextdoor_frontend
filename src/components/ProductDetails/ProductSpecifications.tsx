import { Card, Typography, Box } from "@mui/material";
import EmptyUI from "../common/EmptyUI";

const specifications = [
  {
    title: "Display Features",
    specs: [
      {
        key: "Display Type",
        value: "IPS LCD",
      },
      {
        key: "Resolution",
        value: "1080 x 2400 pixels",
      },
      {
        key: "Size",
        value: "6.5 inches",
      },
      {
        key: "Panel Type",
        value: "IPS LCD",
      },
      {
        key: "Resolution Type",
        value: "Full HD+",
      },
      {
        key: "Brightness",
        value: "480 nits",
      },
      {
        key: "Response Time",
        value: "5 ms",
      },
    ],
  },
  {
    title: "Video Features",
    specs: [
      {
        key: "Display Type",
        value: "IPS LCD",
      },
      {
        key: "Resolution",
        value: "1080 x 2400 pixels",
      },
      {
        key: "Size",
        value: "6.5 inches",
      },
      {
        key: "Panel Type",
        value: "IPS LCD",
      },
      {
        key: "Resolution Type",
        value: "Full HD+",
      },
      {
        key: "Brightness",
        value: "480 nits",
      },
      {
        key: "Response Time",
        value: "5 ms",
      },
    ],
  },
  {
    title: "Warranty Information",
    specs: [
      {
        key: "Warranty",
        value: "3 Year",
      },
    ],
  },
];

const ProductSpecifications = () => {
  return (
    <>
      <Card sx={{ bgcolor: "white", p: 2 }} id="specification">
        <Typography variant="h6" sx={{ mb: 3 }}>
          Specifications
        </Typography>

        {specifications?.length ? (
          <Box>
            {specifications?.map((spec, i) => (
              <Box key={i} sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    bgcolor: "primary.lighter",
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    mb: 1,
                    borderRadius: 1,
                    color: "text.secondary",
                  }}
                >
                  {spec.title}
                </Typography>
                {spec.specs?.map((item, j) => (
                  <Box
                    key={j}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid",
                      borderColor: "grey.200",
                      py: 1,
                      px: 1,
                      "&:hover": {
                        bgcolor: "grey.200",
                      },
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Typography variant="body2" sx={{ color: "grey.600" }}>
                        {item.key}
                      </Typography>
                    </Box>
                    <Box sx={{ width: "70%" }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        ) : (
          <EmptyUI title="No specification found" />
        )}
      </Card>
    </>
  );
};

export default ProductSpecifications;
