import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    businessName: 'Digital Creator Studio',
    email: 'seller@example.com',
    payoutMethod: 'PayPal',
    payoutEmail: 'seller@paypal.com'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Save to database
    alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    // TODO: Send password reset email via Cognito
    const confirm = window.confirm(
      'We will send a secure password reset link to your email address. Continue?'
    );
    if (confirm) {
      alert('Password reset link sent to your email. Please check your inbox.');
    }
  };

  const handleDownloadTaxDocs = () => {
    // TODO: Generate and download tax documents
    alert('Tax documents will be available at year end. Check back in January!');
  };

  const handleDeleteAccount = () => {
    const confirm = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone and will remove all your products and sales data.'
    );
    if (confirm) {
      const finalConfirm = window.confirm(
        'This will permanently delete your account. Type DELETE to confirm.'
      );
      if (finalConfirm) {
        // TODO: Implement account deletion
        alert('Account deletion initiated. You will receive a confirmation email.');
      }
    }
  };

  const handleLogout = () => {
    // TODO: Implement logout with Cognito
    alert('Logged out successfully!');
  };

  return (
    <div className="profile-page">
      <h2>Seller Profile</h2>
      
      <div className="profile-grid">
        <div className="card">
          <h3>Account Information</h3>
          <form onSubmit={handleSave} className="profile-form">
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                name="businessName"
                value={profileData.businessName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Payout Method</label>
              <div className="payout-options">
                <a 
                  href="https://dashboard.stripe.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-stripe"
                >
                  Connect Stripe Account
                </a>
                <a 
                  href="https://www.paypal.com/bizsignup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-paypal"
                >
                  Connect PayPal
                </a>
              </div>
              <small>Choose your preferred payout method. Stripe recommended for fastest payouts.</small>
            </div>

            <div className="form-group">
              <label>Current Payout Status</label>
              <div className="payout-status">
                <span className="status connected">✓ Stripe Connected</span>
                <span className="payout-info">Payouts every 2 business days</span>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="card">
          <h3>Account Actions</h3>
          <div className="account-actions">
            <button className="btn btn-primary" onClick={handleChangePassword}>
              Change Password
            </button>
            <button className="btn btn-primary" onClick={handleDownloadTaxDocs}>
              Download Tax Documents
            </button>
            <button className="btn btn-primary danger" onClick={handleLogout}>
              Logout
            </button>
            <button className="btn btn-primary delete-account" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;