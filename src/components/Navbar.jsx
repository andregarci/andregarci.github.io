import PropTypes from "prop-types";

// Navigation links data
const navLinks = [
  { href: "#hero", text: "Home" },
  { href: "#about", text: "Portafolio" },
  { href: "#habilidades", text: "Habilidades Blandas" },
  { href: "#skills", text: "Conocimientos" },
  { href: "#resume", text: "Perfil Profesional" },
];

// Social media links data
const socialLinks = [
  { 
    href: "https://twitter.com/andregarcia_pe", 
    ariaLabel: "Twitter", 
    icon: "bi-twitter" 
  },
  { 
    href: "https://www.instagram.com/andregarcia_pe/", 
    ariaLabel: "Instagram", 
    icon: "bi-instagram" 
  },
  { 
    href: "https://www.linkedin.com/in/andregarcia-pe/", 
    ariaLabel: "LinkedIn", 
    icon: "bi-linkedin" 
  },
  { 
    href: "https://www.threads.net/@andregarcia_pe", 
    ariaLabel: "Threads", 
    icon: "bi-threads" 
  },
  { 
    href: "https://github.com/andregarci", 
    ariaLabel: "GitHub", 
    icon: "bi-github" 
  },
];

// Profile component
const ProfileHeader = () => (
  <div id="logo">
    <h1 className="text-center">
      <img
        className="rounded-circle"
        src="https://robohash.org/123"
        alt="Foto de Andre Garcia"
        width="200"
        height="200"
      />
      <span className="title">Andre Garcia</span>
      <span className="tagline">Programador</span>
    </h1>
  </div>
);

// Navigation menu component
const NavMenu = () => (
  <div id="main-menu" role="navigation">
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

// Social links component
const SocialLinks = () => (
  <div className="social">
    <ul>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
          >
            <i className={`bi ${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = ({ isActive }) => {
  return (
    <nav id="slide-menu" className={isActive ? "active" : ""}>
      <ProfileHeader />
      <NavMenu />
      <SocialLinks />
    </nav>
  );
};

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Navbar;
