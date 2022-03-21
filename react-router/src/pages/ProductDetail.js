import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>{`Product Detail ${params.productId}`}</h1>
    </section>
  );
};

export default ProductDetail;
