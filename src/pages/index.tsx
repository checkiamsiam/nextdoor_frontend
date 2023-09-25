import SEO from "@/components/common/SEO";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <>
      <SEO title="NextDoor - Your Destination for Electronic Innovations" />
      <div></div>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
