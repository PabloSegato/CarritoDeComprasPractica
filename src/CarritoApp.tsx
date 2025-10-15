import { Navigate, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const CarritoApp = () => {
  return (
    <>
      <NavBarComponent />

      <div>
        <h1>Hola mundo</h1>
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="/carrito" element={<CartPage />}></Route>

          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default CarritoApp;
