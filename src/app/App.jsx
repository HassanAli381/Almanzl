import "./App.css";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import ProductDetailsPage from "../pages/productDetails/ProductDetailsPage";
import Products from "../components/Products";
import { SearchProvider } from "../context/search/SearchContext";
import { ProductsProvider } from "../context/product/ProductContext"; 

function App() {
    return (
        <>
            <SearchProvider>
                <ProductsProvider>
                    <Navbar />
                    <Products />
                </ProductsProvider>
            </SearchProvider>

            <ProductDetailsPage />
            <SubNav />
        </>
    );
}
export default App;