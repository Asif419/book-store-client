const TrustedBrandsBanner = () => {
  const brands = [
    { name: "TikTok", logo: "https://i.postimg.cc/Hsr1RNqh/temp-Image-X7e4-EW.avif" },
    { name: "Booking.com", logo: "https://i.postimg.cc/2yKymZ8R/temp-Imagevczq1-B.avif" },
    { name: "Microsoft", logo: "https://i.postimg.cc/xdv2gbwj/temp-Imagex2g-Y5-N.avif" },
    { name: "TIER", logo: "https://i.postimg.cc/qq5Vgc3w/temp-Image-Rdmh-XI.avif" },
    { name: "LinkedIn", logo: "https://i.postimg.cc/G2b1fmRF/temp-Image60b-Qph.avif" },
    { name: "Zalando", logo: "https://i.postimg.cc/bYCj6PBn/temp-Image-MMVVn-D.avif" },
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
              className="h-8 md:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsBanner;