import React, { createContext, useContext, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl shadow-2xl border text-sm font-medium transition-all duration-300 transform translate-y-0 ${
              toast.type === "success"
                ? "bg-slate-900 text-white border-slate-800 dark:bg-slate-800 dark:border-slate-700"
                : toast.type === "info"
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-red-600 text-white border-red-500"
            }`}
          >
            <div className="flex items-center gap-3">
              {toast.type === "success" && <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />}
              {toast.type === "info" && <FaInfoCircle className="text-sky-300 text-lg flex-shrink-0" />}
              {toast.type === "error" && <FaExclamationCircle className="text-rose-300 text-lg flex-shrink-0" />}
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
