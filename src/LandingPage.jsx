import React, { useState } from "react";

const LandingPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const reviews = [
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/1-1-1024x518.jpg",
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/4-1-1024x483.jpg",
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/2-1-1024x481.jpg",
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/5-1-1024x485.jpg",
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/6-1-1024x518.jpg",
  "https://www.ecomempire.ai/wp-content/uploads/2025/09/3-1-1024x587.jpg",
];

  const faqs = [
    {
      question: "Will this workshop be live?",
      answer: "Yes! This is a LIVE interactive workshop where you can ask questions in real-time and get immediate answers. You'll be learning alongside other aspiring e-commerce entrepreneurs, making it a collaborative experience."
    },
    {
      question: "Any hidden terms & conditions?",
      answer: "Absolutely not! What you see is what you get. The ₹99/- registration fee is all you need to pay. There are no hidden costs, no upsells during the workshop, and no surprise charges. We believe in complete transparency."
    },
    {
      question: "Will you share the recording?",
      answer: "Yes, all registered attendees will receive access to the complete workshop recording. However, we highly recommend attending live to get the most value, ask questions, and participate in interactive sessions."
    },
    {
      question: "How will I get the bonuses?",
      answer: "All bonuses worth ₹10,000/- will be delivered digitally via email within 24 hours of your registration. You'll receive immediate access to the Workshop Starter Kit, community invite, and other resources before the workshop begins."
    },
    {
      question: "How will you remind me of the workshop?",
      answer: "You'll receive multiple reminders via email and WhatsApp (if provided). We'll send you a reminder 24 hours before, 1 hour before, and 15 minutes before the workshop starts, along with the Zoom link to join."
    },
    {
      question: "Do I need to bring anything?",
      answer: "Just bring yourself, a notebook, and an open mind! You'll need a stable internet connection and a device (laptop, tablet, or smartphone) to join the Zoom session. No prior technical knowledge or experience is required."
    },
    {
      question: "How will I get a refund?",
      answer: "If you attend the workshop and don't find it helpful, simply email us within 7 days at support@ecomempire.ai with your registration details. We'll process 200% of your money back - no questions asked. That's our promise!"
    }
  ];




  return (
    <div className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-green-600 text-white text-center py-10 px-4">
        <p className="text-xs uppercase tracking-widest font-semibold">
          India’s Most Comprehensive E-Commerce Workshop
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
          Learn the Strategies Behind My <br />
          Successful Indian E-Commerce <br />
          Stores In My <span className="underline">Live Workshop</span>
        </h1>

        <p className="mt-3 text-sm opacity-90">
          (No Prior Knowledge or Technical Experience Required)
        </p>

        <div className="mt-4 inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full text-sm font-bold">
          ⭐⭐⭐⭐⭐ <span>Rating: 4.9 | 12,478 Reviews</span>
        </div>
      </section>

      {/* ================= VIDEO + DETAILS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Video */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://player.vimeo.com/video/977681131?color=ffffff&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
    title="Workshop Video"
  ></iframe>
</div>

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Jumpstart your Indian e-commerce journey with my fail-proof method!
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="border rounded-lg p-3">📅 Date<br /><b>11th January</b></div>
            <div className="border rounded-lg p-3">⏰ Time<br /><b>7 PM</b></div>
            <div className="border rounded-lg p-3">💻 Workshop<br /><b>Zoom</b></div>
            <div className="border rounded-lg p-3">🗣 Language<br /><b>Hindi</b></div>
          </div>

          <a 
            href="https://rzp.io/rzp/TQi7nkY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl w-full md:w-auto">
              Register Now @ ₹99/-
            </button>
          </a>
        </div>
      </section>

      {/* ================= 3 STAGES ================= */}
      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-center text-3xl font-extrabold mb-2">
          Learn <span className="text-green-600">3 Stages</span> to Start Profitable Indian E-Commerce Store
        </h2>

        <p className="text-center text-sm mb-10 text-gray-600">
          Start → Build → Grow
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Start */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold text-green-600 mb-4">
              Start (Identify Winning Products)
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✅ Find winning products using latest methods</li>
              <li>✅ Utilize free ad materials instead of creating from scratch</li>
              <li>✅ Create compelling, high-converting ads powered by AI</li>
            </ul>
          </div>

          {/* Build */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold text-green-600 mb-4">
              Build (Launch Your Store)
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✅ Launch your online store for as little as ₹20/month</li>
              <li>✅ Boost conversion rates with optimized checkout</li>
              <li>✅ Maximize AOV with proven upselling tactics</li>
            </ul>
          </div>

          {/* Grow */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold text-green-600 mb-4">
              Grow (Drive Sales & Scale)
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✅ Drive instant sales with Facebook Ads strategies</li>
              <li>✅ Implement RTO reduction techniques</li>
              <li>✅ Scale your store to 6-7 figures and beyond</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= BONUSES ================= */}
      <section className="bg-green-700 py-14 px-4 text-white">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Book Your Spot & Unlock Bonuses Worth ₹10,000/-
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            "Workshop Starter Kit\nValue: ₹2000+",
            "30 Day E-Commerce Challenge\nValue: ₹3000+",
            "₹1Cr/Month Winning Products Case Study\nValue: Priceless",
            "Community of E-Com Store Owners\nValue: ₹2000+",
            "Live Q&A Session\nValue: ₹3000+",
          ].map((item, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-xl font-semibold whitespace-pre-line">
              🎁 {item}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://rzp.io/rzp/TQi7nkY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl">
              Register Now @ ₹99/-
            </button>
          </a>
        </div>
      </section>

     {/* ================= TESTIMONIALS ================= */}
<section className="py-14 px-4 bg-green-50">
  <h2 className="text-center text-3xl font-extrabold mb-10">
    What our <span className="text-green-600">Students Say…</span>
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {reviews.map((img, index) => (
      <div
        key={index}
        className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition duration-300"
      >
        <img
          src={img}
          alt={`Student Review ${index + 1}`}
          className="rounded-lg w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</section>


      {/* ================= GUARANTEE ================= */}
      <section className="py-14 px-4 text-center">
        <h2 className="text-2xl font-extrabold">
          100% <span className="text-green-600">Money Back</span> Guarantee
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-sm">
          If you don’t find this workshop helpful, I will return
          <b> 200% of your money.</b> No questions asked. Promise!
        </p>

        <a 
          href="https://rzp.io/rzp/TQi7nkY" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 font-bold py-3 px-6 rounded-xl">
            Register Now @ ₹99/-
          </button>
        </a>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-green-600 text-xl font-bold ml-4">
                  {expandedFAQ === i ? "➖" : "➕"}
                </span>
              </button>
              
              {expandedFAQ === i && (
                <div className="px-4 pb-4 text-sm text-gray-700 border-t border-gray-100 pt-3 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center text-xs py-6 bg-gray-900 text-white">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <a 
            href="https://www.ecomempire.ai/contact-us/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact Us
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://www.ecomempire.ai/terms-of-service/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://www.ecomempire.ai/privacy-policy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://www.ecomempire.ai/shipping-and-delivery/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Shipping & Delivery
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://www.ecomempire.ai/refund-policy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Refund Policy
          </a>
        </div>
        <p>© 2025 Ecom Empire. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;



// https://www.ecomempire.ai/wp-content/uploads/2025/09/1-1-1024x518.jpg
// https://www.ecomempire.ai/wp-content/uploads/2025/09/4-1-1024x483.jpg
// https://www.ecomempire.ai/wp-content/uploads/2025/09/2-1-1024x481.jpg
// https://www.ecomempire.ai/wp-content/uploads/2025/09/5-1-1024x485.jpg
// https://www.ecomempire.ai/wp-content/uploads/2025/09/6-1-1024x518.jpg
// https://www.ecomempire.ai/wp-content/uploads/2025/09/3-1-1024x587.jpg
