import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const CompanyInfo = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa', // Gray background color
    padding: '20px',
    textAlign: 'center',
  };

  const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  };

  const companyInfoStyle = {
    flex: '1',
    maxWidth: '400px', // Adjust the width as needed
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff', // White background color for the box
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const addressStyle = {
    margin: '8px 0',
    color: '#333',
  };

  const phoneNumberStyle = {
    color: '#007BFF',
    fontWeight: 'bold',
  };

  const emailStyle = {
    color: '#28A745',
    textDecoration: 'none',
  };

  const workingHoursStyle = {
    marginTop: '16px',
    color: '#6C757D',
  };

  const mapContainerStyle = {
    flex: '1',
    maxWidth: '600px', // Set a maximum width for the map
    margin: '10px',
    width: '100%', // Make the map container responsive
    overflow: 'hidden', // Hide overflow to prevent horizontal scrollbar
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <div style={companyInfoStyle}>
          <h2>Company Information</h2>
          <p style={addressStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            123 Main Street, Cityville, Country
          </p>
          <p style={phoneNumberStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            Phone: +1 (555) 123-4567
          </p>
          <p style={emailStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            Email: <a href="mailto:info@example.com" style={emailStyle}>info@example.com</a>
          </p>
          <p style={workingHoursStyle}>
            <FontAwesomeIcon icon={faClock} style={iconStyle} />
            Working Hours: Mon-Fri 9:00 AM - 5:00 PM
          </p>
        </div>
        <div style={mapContainerStyle}>
          <div style={{ width: '100%' }}>
            <iframe
              title="Google Maps"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=9%C2%B000'51.0%22N%2038%C2%B047'13.9%22E+(Brilliant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
