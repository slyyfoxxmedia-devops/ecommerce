import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  // Mock data - will be replaced with real data from database
  const products = [
    {
      id: 1,
      title: 'Digital Marketing Guide',
      category: 'Educational Content',
      status: 'Active',
      sales: 12,
      revenue: '$240',
      dateCreated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Web Design Templates',
      category: 'Creative Assets',
      status: 'Pending Review',
      sales: 0,
      revenue: '$0',
      dateCreated: '2024-01-20'
    },
    {
      id: 3,
      title: 'Stock Photos Pack',
      category: 'Creative Assets',
      status: 'Active',
      sales: 25,
      revenue: '$375',
      dateCreated: '2024-01-10'
    }
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>My Products</h2>
        <Link to="/products/create" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      <div className="card">
        {products.length === 0 ? (
          <div className="empty-state">
            <p>No products yet. Create your first digital product!</p>
            <Link to="/products/create" className="btn btn-primary">
              Create Product
            </Link>
          </div>
        ) : (
          <div className="products-table">
            <div className="table-header">
              <div>Product</div>
              <div>Category</div>
              <div>Status</div>
              <div>Sales</div>
              <div>Revenue</div>
              <div>Actions</div>
            </div>
            {products.map(product => (
              <div key={product.id} className="table-row">
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <small>{product.dateCreated}</small>
                </div>
                <div>{product.category}</div>
                <div>
                  <span className={`status ${product.status.toLowerCase().replace(' ', '-')}`}>
                    {product.status}
                  </span>
                </div>
                <div>{product.sales}</div>
                <div>{product.revenue}</div>
                <div className="actions">
                  <button className="btn-small">Edit</button>
                  <button className="btn-small danger">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;