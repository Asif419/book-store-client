import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding and App Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">📚 BookShop</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Powerful reads — 15 minutes at a time. Your gateway to modern and timeless books.
          </p>
        </div>

        {/* Editorial */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Editorial</h3>
          <ul className="text-sm space-y-2">
            <li><a className="link link-hover">Book Lists</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li><a className="link link-hover">Pricing</a></li>
            <li><a className="link link-hover">Gift Cards</a></li>
            <li><a className="link link-hover">Contact & Help</a></li>
            <li><a className="link link-hover">Cancel Subscription</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-2">
            <li><a className="link link-hover">About</a></li>
            <li><a className="link link-hover">Careers</a></li>
            <li><a className="link link-hover">Partners</a></li>
            <li><a className="link link-hover">Code of Conduct</a></li>
            <li><a className="link link-hover">Press Room</a></li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl text-gray-500">
            <a className="hover:text-primary"><FaFacebookF /></a>
            <a className="hover:text-primary"><FaTwitter /></a>
            <a className="hover:text-primary"><FaLinkedinIn /></a>
            <a className="hover:text-primary"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t pt-4 pb-8 px-4 sm:px-6 lg:px-8 text-gray-500">
        &copy; {new Date().getFullYear()} BookShop · Sitemap · Legal Notice · Terms of Service · Privacy Policy · Cookie Consent
      </div>
    </footer>
  );
};

export default Footer;