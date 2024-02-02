import * as React from "react";

export default function CustomAppBar() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a href="/" className="nav-site-logo">
          <img className="logo-image" src="../logo.png" alt="Logo" />
        </a>
        <div className="logo-name">YakiRikko</div>
        <nav className="nav-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/equipment">Equipment</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Equipment</a></li>
          </ul>
        </nav>
        <div className="nav-contact-info">
          <p>yakirikko1@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
