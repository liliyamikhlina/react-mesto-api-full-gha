import React from "react";

function Footer({ isLoggedIn }) {
  return (
    <footer className={`footer ${isLoggedIn ? "footer_active" : ""}`}>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
}

export default Footer;
