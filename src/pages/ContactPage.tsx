import { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Have questions, feedback, or just want to say hello? We'd love to hear from you. Reach out using the form below or through our contact info.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-2">📍 Address</h2>
            <p>123 Book Street, Booktown, BK 12345</p>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-2">📞 Phone</h2>
            <p>+123 456 7890</p>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-2">📧 Email</h2>
            <p>support@bookshop.com</p>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-2">🕒 Working Hours</h2>
            <p>Monday - Friday: 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-base-200 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;