import React from "react";

const LandingPage = () => {
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

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl w-full md:w-auto">
            Register Now @ ₹99/-
          </button>
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
          <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl">
            Register Now @ ₹99/-
          </button>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-14 px-4 bg-green-50 text-center">
        <h2 className="text-3xl font-extrabold mb-6">
          What our <span className="text-green-600">Students Say…</span>
        </h2>
        <p className="text-gray-500">Testimonials will appear here</p>
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

        <button className="mt-6 bg-yellow-400 font-bold py-3 px-6 rounded-xl">
          Register Now @ ₹99/-
        </button>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Will this workshop be live?",
            "Any hidden terms & conditions?",
            "Will you share the recording?",
            "How will I get the bonuses?",
            "How will you remind me of the workshop?",
            "Do I need to bring anything?",
            "How will I get a refund?",
          ].map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow font-medium">
              ➕ {q}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center text-xs py-4 bg-gray-900 text-white">
        Contact Us | Terms of Service | Privacy Policy | Shipping & Delivery | Cancellation & Refund  
        <br />© 2025 Ecom Empire. All rights reserved.
      </footer>

    </div>
  );
};

export default LandingPage;
