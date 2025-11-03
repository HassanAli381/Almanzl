import "./App.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./app.routes";
import { AuthProvider } from "../pages/authentication/context/AuthProvider";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import ProductDetailsPage from "../pages/productDetails/ProductDetailsPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <AppRoutes />
      </AuthProvider>
    </Router>
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <ProductDetailsPage />
      <SubNav />
    </>
  );
}
export default App;
