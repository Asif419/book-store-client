import { useEffect } from "react";

const shopData = [
  {
    name: "Dhaka City Library",
    location: "Dhanmondi 32, Dhaka",
    info: "Open daily 9AM – 9PM | Quiet reading rooms, free Wi-Fi, and large fiction & research collection available."
  },
  {
    name: "Chattogram Knowledge Hub",
    location: "GEC Circle, Chattogram",
    info: "Open Mon-Sat 8AM – 8PM | Study rooms, academic archives, and children’s literature section."
  },
  {
    name: "Sylhet Public Library",
    location: "Zindabazar, Sylhet",
    info: "Open 7 days a week 9AM – 8PM | Large collection of local and international titles, group study allowed."
  },
  {
    name: "Khulna Readers’ Corner",
    location: "Shibbari Road, Khulna",
    info: "Open daily 10AM – 7PM | Research desks, career books, and daily newspapers available."
  },
  {
    name: "Rajshahi Library & Archive",
    location: "Shaheb Bazar, Rajshahi",
    info: "Open Mon-Fri 9AM – 8PM | Government publications and archive room accessible to members."
  },
  {
    name: "Barisal Community Library",
    location: "Sadar Road, Barisal",
    info: "Open every day 10AM – 6PM | Free membership and children's storytime every weekend."
  },
  {
    name: "Cumilla Book Center",
    location: "Kandirpar, Cumilla",
    info: "Open Mon-Sun 9AM – 7PM | Well-stocked general reading, student-friendly environment."
  },
  {
    name: "Rangpur Knowledge Point",
    location: "Central Road, Rangpur",
    info: "Open Sat-Thu 8AM – 6PM | Quiet study areas, old manuscripts, and English learning resources."
  },
];

const LocationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center mb-10 text-primary">Our Physical Shops</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shopData.map((shop, idx) => (
          <div key={idx} className="bg-base-100 border border-base-300 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-1">{shop.name}</h3>
            <p className="text-sm text-gray-700 font-medium mb-1">{shop.location}</p>
            <p className="text-sm text-gray-600">{shop.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationPage;