const TrustedBrandsBanner = () => {
  const brands = [
    { name: "TikTok", logo: "/src/assets/icons/tiktok.png" },
    { name: "Booking.com", logo: "/src/assets/icons/booking.png" },
    { name: "Microsoft", logo: "/src/assets/icons/microsoft.png" },
    { name: "Lyft", logo: "/src/assets/icons/lyft.png" },
    { name: "Babbel", logo: "/src/assets/icons/babbel.png" },
    { name: "TIER", logo: "/src/assets/icons/tier.png" },
    { name: "LinkedIn", logo: "/src/assets/icons/linkedin.png" },
    { name: "Zalando", logo: "/src/assets/icons/zalando.png" },
  ];

  return (
    <section className="bg-blue-200 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h3 className="text-sm font-semibold text-gray-700">
          Trusted by the world&apos;s leading brands
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map((brand, idx) => (
            <img
              key={idx}
              src={brand.logo}
              alt={brand.name}
              className="h-10 md:h-24"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsBanner;