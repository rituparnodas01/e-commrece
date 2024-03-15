import React, { useState } from 'react';
import styled from 'styled-components';

const SellerPanel = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        id: 1,
        name: '',
        category: '',
        price: '',
        image: null,
        stock: '',
        description: ''
    });
    const [editMode, setEditMode] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode !== null) {
            const updatedProducts = [...products];
            updatedProducts[editMode] = formData;
            setProducts(updatedProducts);
            setEditMode(null);
        } else {
            const newProduct = { ...formData };
            setProducts([...products, newProduct]);
        }
        setFormData({
            id: formData.id + 1,
            name: '',
            category: '',
            price: '',
            image: null,
            stock: '',
            description: ''
        });
    };

    const handleEdit = (index) => {
        const productToEdit = products[index];
        setFormData(productToEdit);
        setEditMode(index);
    };

    const handleDelete = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
    <Wrapper>
        <div className="seller-panel-container">
            <div className="form-container">
                <h1>Seller Panel</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required /><br /><br />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required /><br /><br />

                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" /><br /><br />

                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} required /><br /><br />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required /><br /><br />

                    <button className='submit-button' type="submit">{editMode !== null ? 'Update Product' : 'Add Product'}</button>
                </form>
            </div>

            <div className="product-list-container">
                <h2>Your Products:</h2>
                <ul className="product-list">
                    {products.map((product, index) => (
                        <li key={product.id} className="product-item">
                            <div className="product-info">
                                <div><strong>ID:</strong> {product.id}</div>
                                <div><strong>Name:</strong> {product.name}</div>
                                <div><strong>Category:</strong> {product.category}</div>
                                <div><strong>Price:</strong> ${product.price}</div>
                                <div><strong>Stock:</strong> {product.stock}</div>
                                <div><strong>Description:</strong> {product.description}</div>
                            </div>
                            <div className="product-image">
                                <img src={URL.createObjectURL(product.image)} alt="Product" />
                            </div>
                            <div className="product-actions">
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
</Wrapper>
    );
};









const Wrapper = styled.section`

.seller-panel-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
h1{
    font-size:25px;
}
.form-container {
    flex: 0 0 45%;
}
.submit-button{
    width:60%;
}
.product-list-container {
    flex: 0 0 45%;
}

form {
    display: flex;
    flex-direction: column;
}

input[type="text"],
input[type="number"],
textarea {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

input[type="file"] {
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px; /* Add space between buttons */
}

button:last-child {
    margin-right: 0; /* Remove margin from the last button */
}

button:hover {
    background-color: #0056b3;
}

.product-list {
    list-style-type: none;
    padding: 0;
}

.product-item {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-info {
    flex: 1;
    font-size:10px;
}

.product-image {
    flex: 0 0 100px;
    margin-left: 20px;
}

.product-image img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 4px;
    margin-right:10px;
}

.product-actions button {
    margin-right: 10px;
}
.product-actions button.Delete {
    background-color: #dc3545; /* Red color for delete button */
}

.product-actions button.Delete:hover {
    background-color: #c82333; /* Darker shade of red on hover */
}

`
export default SellerPanel;
