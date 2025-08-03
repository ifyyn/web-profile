import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a to="/" className="w-[99px]">
              <img src="./images/logo1.png" alt="" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                to="/"
                className="text-accent hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                to="/projects"
                className="text-accent hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                to="/certificates"
                className="text-accent hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Certificates
              </a>
              <a
                to="/blog"
                className="text-accent hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </a>
              <a
                to="#contact"
                className="bg-[#f6c432] text-primary px-6 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
