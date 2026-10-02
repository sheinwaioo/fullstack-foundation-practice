import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import ProductsLayout from "./components/ui/layouts/products";

export const router = createBrowserRouter([
    {path: "/", Component: Home}, 
    {path: "/about", Component: About},
    {Component: ProductsLayout, children: [
        {path: "/products", Component: Dashboard, children: [
            {index: true, Component: Products},
            {path: ":pid/edit/:uid?", Component: Details}
        ]}
    ]}
]);