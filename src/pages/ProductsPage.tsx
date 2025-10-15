import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/productos`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al cargar los productos",
      });
      console.error(error);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((item) => (
        <p key={item.id}> {item.title} </p>
      ))}
    </>
  );
};

export default ProductsPage;
