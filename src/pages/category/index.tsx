import { categories } from "@/static/data";
import { Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <Container fixed sx={{ py: 10 }}>
      <Grid container spacing={2}>
        {categories?.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <Card
                sx={{
                  p: 2,
                  cursor: "pointer",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 18 }}>
                  {category.name}
                </Typography>

                <Image
                  src={category?.icon}
                  alt={category?.name}
                  width={40}
                  height={40}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
