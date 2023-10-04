import Categories from "@/components/Category/Categories";
import SimpleBreadCrumbs from "@/components/common/BreadCrumbs/SimpleBreadCrumbs";
import SEO from "@/components/common/SEO";

const CategoriesPage = () => {
  return (
    <>
      <SEO title="Categories | NextDoor" />

      <SimpleBreadCrumbs links={[{ name: "Categories", path: "/category" }]} />
      <Categories />
    </>
  );
};

export default CategoriesPage;
