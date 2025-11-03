import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "../search/SearchContext";
import { useFetch } from "../../hooks/useFetch";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const { query } = useContext(SearchContext);
    const [products, setProducts] = useState([]);

    const productsUrl = query
        ? `http://localhost:3000/api/products?name=${query}`
        : `http://localhost:3000/api/products`;

    const { data, loading, error } = useFetch(productsUrl);

    useEffect(() => {
        if (data?.data) {
            setProducts(data?.data);
        }
    }, [data]);

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    );
};