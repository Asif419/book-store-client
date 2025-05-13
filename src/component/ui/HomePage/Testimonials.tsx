const testimonialsData = [
  {
    image: "/src/assets/images/person-1.jpg",
    tag: "Leaders",
    quote: "Most CEOs read a book a week. Many use platforms like BookShop to acquire key concepts that help them keep a fresh perspective—refining vision, strategy, and execution.",
    highlight: "help them keep a fresh perspective—refining vision, strategy, and execution."
  },
  {
    image: "/src/assets/images/person-2.jpg",
    tag: "Upskillers",
    quote: "Life changing. The ability to grasp a book’s core message in minutes opens doors to new personal and professional growth.",
    highlight: "grasp a book’s core message in minutes"
  },
  {
    image: "/src/assets/images/person-3.jpg",
    tag: "Lifelong learners",
    quote: "This is simply the coolest reading app. I now spend more time learning than endlessly scrolling through social media.",
    highlight: "the coolest reading app"
  }
];

const Testimonials = () => {

  return (
    <section className="max-w-7xl mx-auto bg-white py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Join 30,000+ readers growing with BookShop
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((t, idx) => (
          <div key={idx} className="border border-base-200 rounded-lg bg-base-100 p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start gap-6">
            <img src={t.image} alt="User" className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg object-cover" />
            <div className="flex-1">
              <span className="text-sm bg-primary text-white px-2 py-1 rounded mb-2 inline-block">{t.tag}</span>
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="text-yellow-500">★★★★★</span><br />
                {t.quote.replace(t.highlight, '')}
                <strong>{t.highlight}</strong>.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 text-center gap-4 md:gap-8 max-w-4xl mx-auto">
        <div>
          <p className="text-2xl md:text-5xl font-bold text-primary">95%</p>
          <p className="text-gray-600 text-sm">of members read more than before</p>
        </div>
        <div>
          <p className="text-2xl md:text-5xl font-bold text-primary">91%</p>
          <p className="text-gray-600 text-sm">create better reading habits</p>
        </div>
        <div>
          <p className="text-2xl md:text-5xl font-bold text-primary">87%</p>
          <p className="text-gray-600 text-sm">made positive life changes</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;