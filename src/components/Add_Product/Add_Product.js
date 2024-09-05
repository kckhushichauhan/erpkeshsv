import React, { useState } from 'react';
import './Add_Product.css';

function AddProduct() {
    const [product, setProduct] = useState({
        id: '',
        productId: '',
        productName: '',
        productType: '',
        productQuantity: '',
        productPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission and communicate with the server
    };

    return (
        <div>
            <h2 className='addproduct'>Add Product</h2>
            <form id="add-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productId">Product ID:</label>
                    <input type="text" id="productId" name="productId" value={product.productId} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productType">Product Type:</label>
                    <input type="text" id="productType" name="productType" value={product.productType} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantity:</label>
                    <input type="number" id="productQuantity" name="productQuantity" value={product.productQuantity} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Price:</label>
                    <input type="number" id="productPrice" name="productPrice" step="0.01" value={product.productPrice} onChange={handleChange} required />
                </div>
                <button type="submit" className="add-product-btn">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
