import { useRouter } from "next/router";

const SingleCategoryPage = () => {
  const { categoryId } = useRouter()?.query;
  return <>{categoryId}</>;
};

export default SingleCategoryPage;
