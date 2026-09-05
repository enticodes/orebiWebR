import React from "react";
import Container from "../common/Container";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaAward, FaUsers, FaRegSmile } from "react-icons/fa";

const About = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Container>
        
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            About Orebi Store
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Crafting Extraordinary Shopping Experiences
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Orebi is a world-class e-commerce brand committed to delivering premium quality items, cutting-edge technology, and unparalleled customer satisfaction across the globe.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-8 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-2xl">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fast & Free Shipping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enjoy worldwide express shipping with real-time tracking on every single order with zero hidden fees.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-8 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">100% Secure Checkout</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your financial transactions and credentials are encrypted using bank-grade AES 256-bit security protocols.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-8 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">24/7 Dedicated Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our customer success team is available round the clock to assist you with inquiries, returns, and order assistance.
            </p>
          </div>
        </div>

        {/* Brand Metrics Section */}
        <div className="bg-black dark:bg-slate-800 text-white rounded-3xl p-10 md:p-14 mb-20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800 dark:divide-slate-700">
            <div className="p-4 space-y-2">
              <div className="text-4xl md:text-5xl font-black text-emerald-400">100K+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Global Customers</div>
            </div>
            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-black text-amber-400">99.8%</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-black text-rose-400">150+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Top Brands Partnered</div>
            </div>
            <div className="p-4 space-y-2 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-black text-indigo-400">24h</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Average Dispatch</div>
            </div>
          </div>
        </div>

        {/* Team Leadership */}
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Leaders</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Innovators and experts driving the next generation of modern retail.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
            {[
              { name: "Alex Morgan", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" },
              { name: "Sophia Chen", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" },
              { name: "Marcus Vance", role: "Lead Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
            ].map((member) => (
              <div key={member.name} className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm space-y-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-gray-100 dark:ring-slate-700"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h4>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};

export default About;