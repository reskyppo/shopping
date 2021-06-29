import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Details from '../../src/components/product/Details';
import Lazyload from '../../src/components/product/Lazyload';
import { Products } from '../../src/utils/data';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isLoaded, setIsLoaded] = useState(false);

  const datas = Products.filter((product) => product.id == id);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return <div>{isLoaded ? <Details datas={datas} /> : <Lazyload />}</div>;
};

export default Product;
