import Banner from "@/components/Home/Banner";
import FeaturedCategory from "@/components/Home/FeaturedCategory";
import LatestProducts from "@/components/Home/LatestProducts";
import SEO from "@/components/common/SEO";

export default function Home() {
  return (
    <>
      <SEO title="NextDoor - Your Destination for Electronic Innovations" />
      <Banner />
      <FeaturedCategory />
      <LatestProducts />
    </>
  );
}
