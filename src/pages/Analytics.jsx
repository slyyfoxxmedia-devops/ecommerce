import React from 'react';
import './Analytics.css';

const Analytics = () => {
  // Mock analytics data
  const salesData = [
    { month: 'Jan', revenue: 450, sales: 23 },
    { month: 'Feb', revenue: 320, sales: 16 },
    { month: 'Mar', revenue: 680, sales: 34 },
    { month: 'Apr', revenue: 520, sales: 26 },
    { month: 'May', revenue: 750, sales: 38 }
  ];

  const topProducts = [
    { name: 'Stock Photos Pack', sales: 25, revenue: 375 },
    { name: 'Digital Marketing Guide', sales: 12, revenue: 240 },
    { name: 'Web Design Templates', sales: 8, revenue: 160 }
  ];

  const recentSales = [
    { product: 'Digital Marketing Guide', amount: 20, date: '2024-01-28', buyer: 'john***@email.com' },
    { product: 'Stock Photos Pack', amount: 15, date: '2024-01-27', buyer: 'sarah***@email.com' },
    { product: 'Digital Marketing Guide', amount: 20, date: '2024-01-25', buyer: 'mike***@email.com' }
  ];

  const totalRevenue = salesData.reduce((sum, month) => sum + month.revenue, 0);
  const totalSales = salesData.reduce((sum, month) => sum + month.sales, 0);
  const avgOrderValue = totalRevenue / totalSales;

  return (
    <div className="analytics-page">
      <h2>Sales Analytics</h2>
      
      <div className="analytics-grid">
        <div className="card">
          <h3>Revenue Overview</h3>
          <div className="revenue-chart">
            {salesData.map((month, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ height: `${(month.revenue / 800) * 100}%` }}
                ></div>
                <span className="month">{month.month}</span>
                <span className="value">${month.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Key Metrics</h3>
          <div className="metrics">
            <div className="metric">
              <span className="metric-value">${totalRevenue}</span>
              <span className="metric-label">Total Revenue</span>
            </div>
            <div className="metric">
              <span className="metric-value">{totalSales}</span>
              <span className="metric-label">Total Sales</span>
            </div>
            <div className="metric">
              <span className="metric-value">${avgOrderValue.toFixed(2)}</span>
              <span className="metric-label">Avg Order Value</span>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="card">
          <h3>Top Performing Products</h3>
          <div className="top-products">
            {topProducts.map((product, index) => (
              <div key={index} className="product-row">
                <div className="product-info">
                  <span className="rank">#{index + 1}</span>
                  <span className="name">{product.name}</span>
                </div>
                <div className="product-stats">
                  <span>{product.sales} sales</span>
                  <span className="revenue">${product.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Recent Sales</h3>
          <div className="recent-sales">
            {recentSales.map((sale, index) => (
              <div key={index} className="sale-row">
                <div className="sale-info">
                  <span className="product">{sale.product}</span>
                  <span className="buyer">{sale.buyer}</span>
                </div>
                <div className="sale-details">
                  <span className="amount">${sale.amount}</span>
                  <span className="date">{sale.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;