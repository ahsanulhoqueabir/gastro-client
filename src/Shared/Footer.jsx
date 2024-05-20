import logo from "../../src/assets/favicon.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="text-black bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div>
            <img src={logo} className="mr-5 h-6 sm:h-12" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              We blend tradition and innovation to craft culinary excellence
              through comprehensive courses that ignite your passion for the art
              of cooking.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a href="">
                <FaFacebook />{" "}
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Contact Information</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <p>
                  <span className=" font-semibold">Address: </span>
                  <span> Uttara-11,Dhaka,Bangladesh</span>
                </p>
                <p>
                  <span className=" font-semibold">Phone: </span>
                  <span> 01800000000</span>
                </p>
                <p>
                  <span className=" font-semibold">Email: </span>
                  <span> support@gastronomix.com</span>
                </p>
              </nav>
            </div>
            <div>
              <p className="font-medium">Additional Resources</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75">FAQ</a>
                <a className="hover:opacity-75">Student Portal</a>
                <a className="hover:opacity-75">Alumni Network</a>
                <a className="hover:opacity-75">Career Services</a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75">Home</a>
                <a className="hover:opacity-75">About Us</a>
                <a className="hover:opacity-75">Programs/Courses</a>
                <a className="hover:opacity-75">Events</a>
                <a className="hover:opacity-75">Blog/News</a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75"> Privacy Policy </a>
                <a className="hover:opacity-75"> Terms &amp; Conditions </a>
                <a className="hover:opacity-75"> Returns Policy </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2024 Gastronomix Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
