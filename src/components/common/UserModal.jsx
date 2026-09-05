import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/user/userSlice";
import { FaTimes, FaUser, FaLock, FaEnvelope, FaSignOutAlt, FaCheck } from "react-icons/fa";
import { useToast } from "./Toast";

const UserModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { addToast } = useToast() || { addToast: () => {} };

  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast?.("Please enter both email and password.", "error");
      return;
    }
    const mockUser = {
      name: email.split("@")[0] || "User",
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    dispatch(login(mockUser));
    addToast?.(`Welcome back, ${mockUser.name}!`, "success");
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      addToast?.("Please fill out all fields.", "error");
      return;
    }
    const newUser = {
      name: name,
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    dispatch(login(newUser));
    addToast?.(`Account created successfully! Welcome ${name}`, "success");
    onClose();
  };

  const handleLogout = () => {
    dispatch(logout());
    addToast?.("Logged out successfully.", "info");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[999] overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full border border-gray-100 dark:border-slate-800 overflow-hidden transform transition-all duration-300 ease-out ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <FaUser />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {isAuthenticated ? "My Profile" : tab === "login" ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isAuthenticated ? "Manage your account" : "Sign in to access your orders & wishlist"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isAuthenticated ? (
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center text-3xl font-bold text-slate-700 dark:text-slate-200 uppercase border-2 border-indigo-500">
                {user?.name?.charAt(0) || "U"}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-4 text-left space-y-3 border border-gray-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>Account Status</span>
                  <span className="font-semibold text-emerald-500 flex items-center gap-1">
                    <FaCheck /> Active
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
                  <span>Membership</span>
                  <span className="font-semibold text-amber-500">VIP Gold</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full py-3 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 rounded-xl text-sm font-semibold hover:bg-rose-100 dark:hover:bg-rose-950/70 transition-colors flex items-center justify-center gap-2"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          ) : (
            <div>
              {/* Tab Selector */}
              <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
                <button
                  onClick={() => setTab("login")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    tab === "login"
                      ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    tab === "register"
                      ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Register
                </button>
              </div>

              {tab === "login" ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
                  >
                    Sign In
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
                  >
                    Create Account
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default UserModal;
