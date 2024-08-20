import React from 'react';
import './UploadPage.css'; // Import the external CSS file

export default function UploadPage() {
  return (
    <div className="component-container">
      <div className="component-card">
        <div className="component-header">
          <h2 className="component-title">Submit a Ticket</h2>
          <p className="component-subtitle">Describe your issue and attach any relevant files.</p>
        </div>
        <textarea
          placeholder="Enter the content..."
          className="component-textarea"
        />
        <div className="component-actions">
          <button className="component-upload-button">
            <svg className="component-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload File
          </button>
          <button type="submit" className="component-submit-button">
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
