import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import ProductsLayout from "./components/ui/layouts/products";

// /products
// /products/:d
export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route element={<ProductsLayout />}>
          <Route path="products" element={<Dashboard />}>
            <Route index element={<Products />} />
            <Route path=":pid/edit/:uid?" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
