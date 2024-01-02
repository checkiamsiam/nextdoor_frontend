import Banner from "@/components/Home/Banner";
import FeaturedCategory from "@/components/Home/FeaturedCategory";
import FeaturedInfo from "@/components/Home/FeaturedInfo";
import HomeInformation from "@/components/Home/HomeInformation";
import HomeIntro from "@/components/Home/HomeIntro";
import LatestProducts from "@/components/Home/LatestProducts";
import SEO from "@/components/common/SEO";
import { getProducts } from "@/redux/features/productApi";
import { IProduct } from "@/types/ApiResponse";

type IProps = {
  products: IProduct[];
};

export default function Home({ products }: IProps) {
  return (
    <>
      <SEO title="NextDoor - Your Destination for Electronic Innovations" />
      <Banner />
      <FeaturedInfo />
      <FeaturedCategory />
      <HomeIntro />
      <LatestProducts products={products} />
      <HomeInformation />
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await getProducts({});

  return { props: { products: products.products } };
};
