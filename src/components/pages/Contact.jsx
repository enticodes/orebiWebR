import React, { useState } from "react";
import Container from "../common/Container";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
import { useToast } from "../common/Toast";

const Contact = () => {
  const { addToast } = useToast() || { addToast: () => {} };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast?.("Please fill in all required fields.", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast?.("Thank you! Your message has been sent successfully.", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">Get In Touch</h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Have questions about products, shipping, or returns? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-lg flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">Head Office</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  100 Fifth Avenue, Suite 400<br />
                  New York, NY 10011, USA
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-lg flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">Phone & WhatsApp</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  +1 (800) 555-OREBI<br />
                  +1 (212) 999-0145
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center text-lg flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">Email Us</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  support@orebi.com<br />
                  sales@orebi.com
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-lg flex-shrink-0">
                <FaClock />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">Working Hours</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Monday – Friday: 9 AM – 8 PM<br />
                  Saturday – Sunday: 10 AM – 6 PM
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800/90 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-slate-700/60 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding order #123"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? "Sending..." : <>Send Message <FaPaperPlane className="text-xs" /></>}
              </button>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Contact;
