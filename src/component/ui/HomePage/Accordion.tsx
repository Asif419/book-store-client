const Accordion = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Do you have any questions?</h2>
  <div className="space-y-4">
    {[
      {
        question: "What can BookShop do for me?",
        answer:
          "BookShop is your personalized online bookstore that helps you discover, purchase, and organize your favorite reads. Whether you're a casual reader or a passionate bibliophile, BookShop provides curated recommendations, a vast collection of genres, and seamless shopping and delivery to make your reading journey enjoyable and efficient."
      },
      {
        question: "How can I use BookShop?",
        answer:
          "Using BookShop is easy and intuitive. Simply create an account, browse through our extensive catalog, and add books you love to your cart or wishlist. You can filter by genre, author, or rating, and our intelligent recommendation system will suggest titles based on your interests. Once you’ve selected your books, checkout is just a few clicks away, and your books will be on their way to your doorstep or device."
      },
      {
        question: "What types of books do you offer?",
        answer:
          "We offer a diverse and inclusive selection of books, including bestsellers, classics, self-help, biographies, children’s books, academic texts, and more. Whether you’re into gripping thrillers, heartwarming fiction, or insightful non-fiction, you’ll find something in our collection. We partner with both major publishers and independent authors to bring you fresh and impactful reads."
      },
      {
        question: "What's included in a plan?",
        answer:
          "By signing up, you gain access to features such as wishlists, reading history, personalized recommendations, and member-only discounts. Some plans also include early access to new releases, exclusive content, and participation in our book clubs and live author events, all designed to deepen your connection with the books you love."
      },
      {
        question: "Can I cancel an order?",
        answer:
          "Yes, we offer a flexible cancellation policy. If you change your mind, you can cancel your order within 24 hours of purchase directly from your dashboard. For digital products, cancellations can be done until the download has started. We aim to make every step of your experience convenient and worry-free."
      },
      {
        question: "Need more help?",
        answer:
          "We’re here for you. If you have any questions, feedback, or concerns, our dedicated customer support team is just an email away. Reach out to us anytime at support@bookshop.com and we’ll get back to you promptly with the help you need."
      }
    ].map((faq, idx) => (
      <div key={idx} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-md font-semibold">
          {faq.question}
        </div>
        <div className="collapse-content">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>
  )
};

export default Accordion;