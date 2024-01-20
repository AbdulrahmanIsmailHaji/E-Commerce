import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Pages/Shop";
import Layout from "./Component/UI/Layout";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import men_banner from "./Component/Assets/banner_mens.png";
import women_banner from "./Component/Assets/banner_women.png";
import kid_banner from "./Component/Assets/banner_kids.png";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />

        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSingup />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
