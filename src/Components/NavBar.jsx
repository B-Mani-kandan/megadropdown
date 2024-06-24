import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link to="/" className="nav__logo">
            <img src={Logo} alt="" />
          </Link>
          <div
            className={`nav__toggle ${showMenu ? "show-icon" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="ri-menu-line nav__toggle-menu"></i>
            <i className="ri-close-line nav__toggle-close"></i>
          </div>
        </div>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <Dropdown title="Assistance" items={discoverItems} />
            <Dropdown title="Our Story" items={resourcesItems} />
            <li>
              <Link to="/Contact" className="nav__link">
                Contact
              </Link>
            </li>
            <Dropdown title="Menu" items={companyItems} />
          </ul>
        </div>
      </nav>
    </header>
  );
};

const Dropdown = ({ title, items }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1118px)");
    const handleMediaChange = (event) => {
      if (event.matches) {
        setShowDropdown(false);
      }
    };
    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  return (
    <li className="dropdown__item">
      <div
        className="nav__link dropdown__button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {title}{" "}
        <i
          className={`ri-arrow-down-s-line dropdown__arrow ${
            showDropdown ? "rotate" : ""
          }`}
        ></i>
      </div>
      <div
        className={`dropdown__container ${showDropdown ? "show-dropdown" : ""}`}
      >
        <div className="dropdown__content">
          {items.map((group, index) => (
            <div className="dropdown__group" key={index}>
              <div className="dropdown__icon">
                <i className={group.icon}></i>
              </div>
              <span className="dropdown__title">{group.title}</span>
              <ul className="dropdown__list">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} className="dropdown__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

const discoverItems = [
  {
    icon: "ri-flashlight-line",
    title: "Comprehensive Logistics Solutions",
    links: [
      { href: "/Sea-Freight", label: "Sea Freight" },
      { href: "/Air-Freight", label: "Air Freight" },
      { href: "/Ware-Housing", label: "Ware Housing" },
      { href: "/Custom-Clearence", label: "Custom Clearence" },
    ],
  },
  {
    icon: "ri-heart-3-line",
    title: "Popular courses",
    links: [
      { href: "/flutter-development", label: "Development with Flutter" },
      { href: "/react-development", label: "Web development with React" },
      { href: "/backend-expert", label: "Backend development expert" },
    ],
  },
  {
    icon: "ri-bookmark-line",
    title: "Careers",
    links: [
      { href: "/web-development", label: "Web development" },
      { href: "/app-development", label: "Applications development" },
      { href: "/ui-ux-design", label: "UI/UX design" },
      { href: "/informatic-security", label: "Informatic security" },
    ],
  },
  {
    icon: "ri-file-paper-2-line",
    title: "Certifications",
    links: [
      { href: "/course-certificates", label: "Course certificates" },
      { href: "/free-certifications", label: "Free certifications" },
    ],
  },
];

const resourcesItems = [
  {
    icon: "ri-code-line",
    title: "Web templates",
    links: [
      { href: "/free-templates", label: "Free templates" },
      { href: "/premium-templates", label: "Premium templates" },
    ],
  },
  {
    icon: "ri-pen-nib-line",
    title: "Designs",
    links: [
      { href: "/web-designs", label: "Web designs" },
      { href: "/app-designs", label: "App designs" },
      { href: "/component-design", label: "Component design" },
    ],
  },
  {
    icon: "ri-apps-2-line",
    title: "Others",
    links: [
      { href: "/recent-blogs", label: "Recent blogs" },
      { href: "/tutorial-videos", label: "Tutorial videos" },
      { href: "/webinar", label: "Webinar" },
    ],
  },
];

const companyItems = [
  {
    icon: "ri-community-line",
    title: "About us",
    links: [
      { href: "/about-us", label: "About us" },
      { href: "/support", label: "Support" },
      { href: "/contact-us", label: "Contact us" },
    ],
  },
  {
    icon: "ri-shield-line",
    title: "Safety and quality",
    links: [
      { href: "/cookie-settings", label: "Cookie settings" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export default NavBar;
