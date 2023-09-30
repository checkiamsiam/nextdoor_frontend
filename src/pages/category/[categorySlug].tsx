import SingleCategory from "@/components/Category/SingleCategory";
import SimpleBreadCrumbs from "@/components/common/BreadCrumbs/SimpleBreadCrumbs";
import SEO from "@/components/common/SEO";
import { useRouter } from "next/router";

const SingleCategoryPage = () => {
  const router = useRouter();
  const categorySlug = router?.query?.categorySlug as string;
  return (
    <>
      <SEO title={categorySlug} />

      <SimpleBreadCrumbs
        links={[
          { name: "Categories", path: "/category" },
          { name: categorySlug, path: `/category/${categorySlug}` },
        ]}
      />
      <SingleCategory />
    </>
  );
};

export default SingleCategoryPage;
