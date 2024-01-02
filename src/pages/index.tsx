import Banner from "@/components/Home/Banner";
import FeaturedCategory from "@/components/Home/FeaturedCategory";
import FeaturedInfo from "@/components/Home/FeaturedInfo";
import HomeInformation from "@/components/Home/HomeInformation";
import HomeIntro from "@/components/Home/HomeIntro";
import LatestProducts from "@/components/Home/LatestProducts";
import SEO from "@/components/common/SEO";

export default function Home() {
  return (
    <>
      <SEO title="NextDoor - Your Destination for Electronic Innovations" />
      <Banner />
      <FeaturedInfo />
      <FeaturedCategory />
      <HomeIntro />
      <LatestProducts />
      <HomeInformation />
    </>
  );
}
