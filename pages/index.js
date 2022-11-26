import FiltersWithDropdown from "../src/components/FiltersWithDropdown/ProductPage";
import { getAllUserMethod } from "../utils/serverRequest";

export default function Home({ products }) {
  return <FiltersWithDropdown products={products} />;
}
export async function getStaticProps() {
  const products = await getAllUserMethod();
  return {
    props: {
      products,
    },
  };
}
