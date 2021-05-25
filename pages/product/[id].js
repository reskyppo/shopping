import { useRouter } from "next/router";

import Carousel from "../../src/components/Carousel";
import { Products } from "../../src/utils/data";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = Products.filter((product) => product.id == id);
  
  return (
    <p>
      {data[0].name}
      {data[0].price}
    </p>
  );
};

export default Product;
