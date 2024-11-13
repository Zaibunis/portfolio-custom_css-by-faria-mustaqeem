import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Faria&apos;s Portfolio</div>
      <ul className="navbar-menu">
        <li>
          <Link href="/home" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="navbar-link">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resumes" className="navbar-link">
            Resumes
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;