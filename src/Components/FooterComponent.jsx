import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-white py-8 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="text-left">
          <h3 className="text-lg font-bold">Models</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">All Models</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Model Price List</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold">Used Cars</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Approved Plus</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Dealer Locator</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold">Customer Area</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Owners</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">myAudi Connect</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Club Rewards</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sustainability</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Assist</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Book a Test Drive</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold">Innovation</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">#FutureIsAnAttitude</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Urbansphere</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold">Support</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Audi Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Corporate Governance</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact / Newsletter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-bold text-left">Follow Us</h3>
        <div className="flex justify-start space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4">
        <p className="text-sm text-gray-400 text-left">&copy; {new Date().getFullYear()} Audi. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
