import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const CartPage = () => {
  const { shoppingList, removeProduct, addQuantity, decrementQuantity } =
    useContext(CartContext);
  console.log(shoppingList);

  const calculateTotal = () => {
    return shoppingList
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handlerPuchase = () => {
    const productsPuchase = shoppingList
      .map((product) => `${product.title} x ${product.quantity}`)
      .join(", ");

    Swal.fire({
      icon: "success",
      title: "La compra se ha realizado con exito",
      html: `<p> Has comprado: </p> <pre>${productsPuchase}</pre> `,
    });
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row"> {product.title}</th>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => addQuantity(product.id)}
                  >
                    +1
                  </button>
                  <button className="btn btn-primary">
                    {product.quantity}
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -1
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
          <th>
            <b>Total: </b>
            <td></td>
            <td></td>
            <td>{calculateTotal()} </td>
          </th>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handlerPuchase}
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default CartPage;
