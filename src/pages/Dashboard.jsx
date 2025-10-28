import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // Mock sales data - will come from database
  const salesData = [
    { productId: 1, amount: 20, date: '2024-01-15', productName: 'Digital Marketing Guide' },
    { productId: 1, amount: 20, date: '2024-01-20', productName: 'Digital Marketing Guide' },
    { productId: 3, amount: 15, date: '2024-01-22', productName: 'Stock Photos Pack' },
    { productId: 1, amount: 20, date: '2024-01-25', productName: 'Digital Marketing Guide' },
    { productId: 3, amount: 15, date: '2024-01-28', productName: 'Stock Photos Pack' }
  ];

  const products = [
    { id: 1, name: 'Digital Marketing Guide', status: 'Active', sales: 12 },
    { id: 2, name: 'Web Design Templates', status: 'Pending', sales: 0 },
    { id: 3, name: 'Stock Photos Pack', status: 'Active', sales: 25 }
  ];

  // Calculate stats
  const calculateStats = () => {
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.status === 'Active').length;
    const totalRevenue = salesData.reduce((sum, sale) => sum + sale.amount, 0);
    
    // Calculate this month's revenue
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const thisMonthRevenue = salesData
      .filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate.getMonth() === currentMonth && saleDate.getFullYear() === currentYear;
      })
      .reduce((sum, sale) => sum + sale.amount, 0);

    return {
      totalProducts,
      activeProducts,
      totalRevenue,
      thisMonthRevenue
    };
  };

  const stats = calculateStats();
  
  const statsCards = [
    { title: 'Total Products', value: stats.totalProducts, icon: '📦', color: 'burnt-orange' },
    { title: 'Active Products', value: stats.activeProducts, icon: '✅', color: 'green' },
    { title: 'Total Revenue', value: `$${stats.totalRevenue}`, icon: '💰', color: 'burnt-orange' },
    { title: 'This Month', value: `$${stats.thisMonthRevenue}`, icon: '📈', color: 'green' }
  ];

  const recentProducts = products.slice(0, 3);

  return (
    <div className="dashboard">
      <div className="stats-grid">
        {statsCards.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h3>Recent Products</h3>
          <div className="products-list">
            {recentProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span className={`status ${product.status.toLowerCase()}`}>
                    {product.status}
                  </span>
                </div>
                <div className="product-sales">{product.sales} sales</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <Link to="/products/create" className="btn btn-primary">
              Add New Product
            </Link>
            <Link to="/analytics" className="btn btn-success">
              View Analytics
            </Link>
          </div>
        </div>

        <div className="card">
          <h3>Other Applications</h3>
          <div className="app-links">
            <a href="https://cms.slyyfoxxmedia.com" target="_blank" rel="noopener noreferrer" className="app-link cms">
              <div className="app-icon">📝</div>
              <div className="app-info">
                <h4>Content Management</h4>
                <p>Manage product descriptions, images, and content</p>
                <span className="status coming-soon">Coming Soon</span>
              </div>
            </a>
            
            <a href="https://crm.slyyfoxxmedia.com" target="_blank" rel="noopener noreferrer" className="app-link crm">
              <div className="app-icon">👥</div>
              <div className="app-info">
                <h4>Customer Management</h4>
                <p>Track customers, support tickets, and relationships</p>
                <span className="status coming-soon">Coming Soon</span>
              </div>
            </a>
            
            <a href="https://marketplace.slyyfoxxmedia.com" target="_blank" rel="noopener noreferrer" className="app-link marketplace">
              <div className="app-icon">🛒</div>
              <div className="app-info">
                <h4>Marketplace</h4>
                <p>View your products as customers see them</p>
                <span className="status coming-soon">Coming Soon</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;