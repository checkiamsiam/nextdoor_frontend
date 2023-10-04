import SingleCategory from "@/components/Category/SingleCategory";
import SimpleBreadCrumbs from "@/components/common/BreadCrumbs/SimpleBreadCrumbs";
import SEO from "@/components/common/SEO";
import { categories } from "@/static/data";
import { useRouter } from "next/router";

const SingleCategoryPage = () => {
  const router = useRouter();
  const categorySlug = router?.query?.categorySlug as string;
  const category = categories.find((cat) => cat.slug === categorySlug);
  return (
    <>
      <SEO title={category?.name} />

      <SimpleBreadCrumbs
        links={[
          { name: "Categories", path: "/category" },
          { name: category?.name || "", path: `/category/${categorySlug}` },
        ]}
      />
      <SingleCategory category={category} />
    </>
  );
};

export default SingleCategoryPage;
