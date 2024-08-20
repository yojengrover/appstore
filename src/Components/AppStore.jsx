import React from 'react';
import './style.css'; // Import the external CSS file
import { useState } from 'react';
import UploadPage from './UploadPage';

const AppStore = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleKBClick = () => {
    setShowComponent(true);
  };
  return (
    <div>
    <header className="header header-md">
      <div className="header-container">
        <a href="#" className="header-link">
          <MountainIcon className="h-6 w-6" />
          <span className="header-title">Acme Apps</span>
        </a>
        <nav className="header-nav header-nav-md">
          <a href="#" className="header-link-sm">
            Apps
          </a>
          <a href="#" className="header-link-sm">
            Pricing
          </a>
          <a href="#" className="header-link-sm">
            About
          </a>
          <a href="#" className="header-link-sm">
            Contact
          </a>
        </nav>
        <button className="getStarted">Get Started</button>
      </div>
    </header>
    <main className="main main-md">
    {showComponent ? (
          <UploadPage />
        ) : (<div>
      <h1 className="main-title main-title-sm main-title-md">
        All Your Apps in One Place
      </h1>
      <div className="main-subtitle main-subtitle-md">
        Discover and manage all your business applications in one centralized platform.
      </div>
      <div className="main-cards main-cards-sm main-cards-lg">
        <Card className="card">
          <div className="card-content" onClick={handleKBClick}>
            <div className="card-primary">
              <LayoutGridIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">KB</h3>
              <p className="text-muted-foreground">
                Easily analyze and customize articles.
              </p>
            </div>
          </div>
        </Card>
        <Card className="card">
          <div className="card-content">
            <div className="card-secondary">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Calendar</h3>
              <p className="text-muted-foreground">
                Stay on top of your schedule with our powerful calendar.
              </p>
            </div>
          </div>
        </Card>
        <Card className="card card-custom">
          <div className="card-content">
            <div className="card-icon-custom">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="card text-xl font-semibold">Project Manager</h3>
              <p className="text-black">
                Manage your projects and teams with ease.
              </p>
            </div>
          </div>
        </Card>
      </div></div>)}
    </main>
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  </div>
  );
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default AppStore;