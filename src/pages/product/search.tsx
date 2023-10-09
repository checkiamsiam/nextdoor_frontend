import ProductSearch from "@/components/ProductSearch/ProductSearch";
import SEO from "@/components/common/SEO";
import { useRouter } from "next/router";
import { capitalize } from "@mui/material";
import SimpleBreadCrumbs from "@/components/common/BreadCrumbs/SimpleBreadCrumbs";

const ProductSearchPage = () => {
  const router = useRouter();
  const search = (router?.query?.search as string) || "";
  return (
    <>
      <SEO title={`Search Results for ${capitalize(search)}`} />

      <SimpleBreadCrumbs
        links={[{ name: "Search", path: `/product/search?search=${search}` }]}
      />
      <ProductSearch />
    </>
  );
};

export default ProductSearchPage;
