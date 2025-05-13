import { FaDownload, FaStar, FaLeaf } from "react-icons/fa";

const HighlightSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 bg-white text-center">
      {/* CTA Button */}
      <div className="mb-6">
        <button className="bg-green-400 hover:bg-green-500 text-white font-medium px-6 py-3 rounded-full shadow-md transition">
          Get started
        </button>
      </div>

      {/* Quote */}
      <blockquote className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 italic mb-6">
        <span className="font-semibold">“Great app.</span> Addicting. Perfect for wait times, morning coffee, evening before bed. <br />
        Extremely well written, thorough, easy to use.”
      </blockquote>

      {/* Stars + User */}
      <div className="mb-12">
        <div className="text-yellow-500 text-lg">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="inline mr-1" />
          ))}
        </div>
        <p className="mt-1 text-sm text-gray-500">Renee D.</p>
      </div>

      {/* Stats */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <FaDownload className="text-blue-600 text-3xl mx-auto mb-2" />
          <p className="text-2xl font-bold">37 Million</p>
          <p className="text-sm text-gray-600">Downloads on all platforms</p>
        </div>
        <div>
          <div className="text-blue-600 text-3xl mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="inline" />
            ))}
          </div>
          <p className="text-2xl font-bold">4.7 Stars</p>
          <p className="text-sm text-gray-600">Average ratings on iOS and Google Play</p>
        </div>
        <div>
          <FaLeaf className="text-blue-600 text-3xl mx-auto mb-2" />
          <p className="text-2xl font-bold">10+ years</p>
          <p className="text-sm text-gray-600">Experience igniting personal growth</p>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;