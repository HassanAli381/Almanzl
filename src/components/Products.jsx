import LoadingSpinner from './LoadingSpinner';
import Error from './Error';
import Product from './Product';
import { useContext } from 'react';
import { ProductsContext } from '../context/product/ProductContext'; 

const Products = () => {
    const { products, loading, error } = useContext(ProductsContext); // Changed context

    if (loading) {
        return <LoadingSpinner resource={"products"} />
    }

    if (error) {
        return <Error resource={"products"} error={error} />;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Our Products
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 sm:mt-0">
                        {products?.length || 0} items found
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products?.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;