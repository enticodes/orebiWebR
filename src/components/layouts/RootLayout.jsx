import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastProvider } from "../common/Toast";
import { useSelector } from "react-redux";

const LayoutContent = () => {
  const mode = useSelector((state) => state.theme?.mode || "light");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

const RootLayout = () => {
  return (
    <ToastProvider>
      <LayoutContent />
    </ToastProvider>
  );
};

export default RootLayout;