import { IProduct } from "@/interface/product.interface";
import { Container } from "@mui/material";
import ProductTopInfo from "./ProductTopInfo";

type IProps = {
  product: IProduct;
};

const ProductDetails = ({ product }: IProps) => {
  return (
    <>
      <Container fixed sx={{ py: 10 }}>
        <ProductTopInfo product={product} />
      </Container>
    </>
  );
};

export default ProductDetails;
