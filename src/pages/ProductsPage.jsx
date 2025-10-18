import { useContext } from "react";
import CardComponent from "../components/CardComponent";
import { CartContext } from "../context/CartContext";
import ProductContext from "../context/ProductContext";

const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1>Productos</h1>

      <hr />
      {products.map((item) => (
        <CardComponent
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          handleAdd={() => addProduct(item)}
          handleRemove={() => removeProduct(item.id)}
        />
      ))}
    </>
  );
};
export default ProductsPage;
