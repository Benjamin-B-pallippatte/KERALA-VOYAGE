import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
 
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact us", href: "/contact" },
];
 
export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const currentPath = location.pathname || "/";
 
  // Apply theme to <html> and persist whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
 
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
 
  const closeMenu = () => setMenuOpen(false);
 
  return (
    <>
      {/* ── Scoped styles ───────────────────────────────────────────── */}
      <style>{`
        /* ── CSS variables ── */
        :root {
          --bg:              #ffffff;
          --text:            #111827;
          --nav-bg:          rgba(255, 255, 255, 0.94);
          --nav-border:      rgba(15, 23, 42, 0.08);
          --nav-link:        #334155;
          --nav-link-hover:  #0f172a;
          --nav-link-active: #0b69ff;
          --nav-shadow:      0 24px 60px rgba(15, 23, 42, 0.08);
          --mobile-menu-bg:  rgba(255, 255, 255, 0.98);
          --toggle-bg:       rgba(241, 245, 249, 0.9);
          --toggle-hover:    rgba(226, 232, 240, 1);
          --burger-color:    #111827;
        }
        [data-theme="dark"] {
          --bg:              #0f172a;
          --text:            #e2e8f0;
          --nav-bg:          rgba(15, 23, 42, 0.94);
          --nav-border:      rgba(148, 163, 184, 0.16);
          --nav-link:        #cbd5e1;
          --nav-link-hover:  #f8fafc;
          --nav-link-active: #7dd3fc;
          --nav-shadow:      0 24px 60px rgba(15, 23, 42, 0.32);
          --mobile-menu-bg:  rgba(15, 23, 42, 0.98);
          --toggle-bg:       rgba(30, 41, 59, 0.9);
          --toggle-hover:    rgba(51, 65, 85, 1);
          --burger-color:    #e2e8f0;
        }
 
        /* ── Global resets ── */
        body {
          background-color: var(--bg);
          color: var(--text);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
 
        /* ── Navbar wrapper ── */
        .navbar-wrapper {
          background: var(--nav-bg);
          box-shadow: var(--nav-shadow);
          border-bottom: var(--nav-border);
          backdrop-filter: blur(18px);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }
 
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.75rem;
          height: 72px;
          gap: 1rem;
          position: relative;
        }
 
        /* ── Logo ── */
        .navbar-logo a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }
        .brand-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--nav-link-active);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
 
        /* ── Desktop nav ── */
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          color: var(--nav-link);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem 0.95rem;
          border-radius: 999px;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .nav-link:hover {
          color: var(--nav-link-hover);
          background: var(--toggle-bg);
          transform: translateY(-1px);
          border-color: transparent;
        }
        .nav-link.active {
          color: var(--nav-link-active);
          font-weight: 600;
          background: rgba(11, 105, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(11, 105, 255, 0.14);
        }
 
        /* ── Theme toggle button (desktop) ── */
        .theme-toggle-btn {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: none;
          border-radius: 50%;
          background: var(--toggle-bg);
          color: var(--nav-link);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .theme-toggle-btn:hover {
          background: var(--toggle-hover);
          transform: translateY(-1px);
        }
 
        /* ── Mobile controls ── */
        .mobile-menu-wrapper {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }
 
        /* Hamburger */
        .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          border-radius: 6px;
        }
        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--burger-color);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .mobile-menu-btn.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
 
        /* Mobile theme toggle */
        .mobile-theme-btn {
          background: var(--toggle-bg);
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        .mobile-theme-btn:hover {
          background: var(--toggle-hover);
        }
 
        /* ── Mobile dropdown ── */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--mobile-menu-bg);
          border-top: 1px solid var(--nav-border);
          box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);
          transform-origin: top;
          transition: transform 0.22s ease, opacity 0.22s ease;
          z-index: 999;
        }
        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0.75rem 0;
        }
        .mobile-nav-list li + li {
          margin-top: 0.35rem;
        }
        .mobile-nav-list li a {
          display: block;
          padding: 0.85rem 1.4rem;
          color: var(--nav-link);
          text-decoration: none;
          font-size: 0.95rem;
          border-radius: 14px;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .mobile-nav-list li a:hover {
          color: var(--nav-link-hover);
          background: var(--toggle-bg);
        }
        .mobile-nav-list li a.active {
          color: var(--nav-link-active);
          background: rgba(11, 105, 255, 0.08);
        }
 
        /* ── Responsive breakpoint ── */
        @media (max-width: 900px) {
          .navbar-menu {
            display: none;
          }
          .mobile-menu-wrapper {
            display: flex;
          }
          .navbar-container {
            flex-wrap: wrap;
            padding: 0.75rem 1rem;
            height: auto;
          }
          .navbar-logo {
            flex: 1;
          }
          .navbar-wrapper {
            padding: 0.35rem 0;
          }
        }
      `}</style>
 
      {/* ── Markup ─────────────────────────────────────────────────── */}
      <header className="navbar-wrapper">
        <nav className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/images/logo.png"
                alt="Kerala Voyage Logo"
                className="logo-img"
              />
              <span className="brand-name">Kerala Voyage</span>
            </Link>
          </div>
 
          {/* Desktop menu */}
          <div className="navbar-menu">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`nav-link ${
                      link.href === currentPath ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
 
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
          
 
          {/* Mobile controls */}
          <div className="mobile-menu-wrapper">
            <button
              className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
 
            <button
              type="button"
              className="mobile-theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
 
          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="mobile-menu">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={`mobile-nav-link ${link.href === currentPath ? "active" : ""}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}