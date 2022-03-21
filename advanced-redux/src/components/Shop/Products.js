import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My Book",
    description: "First Book I wrote",
  },
  {
    id: "p2",
    price: 8,
    title: "My Other Book",
    description: "Second Book I wrote",
  },
];

const Products = (props) => {
  const prodItems = DUMMY_PRODUCTS.map((prod) => {
    return (
      <ProductItem
        key={prod.id}
        id={prod.id}
        title={prod.title}
        price={prod.price}
        description={prod.description}
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{prodItems}</ul>
    </section>
  );
};

export default Products;
