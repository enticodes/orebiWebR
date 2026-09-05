import React from "react";

const Badge = ({ badgeText, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center justify-center text-center px-3 py-1 bg-black dark:bg-white text-white dark:text-black uppercase font-bold text-[10px] sm:text-xs rounded-md shadow-sm whitespace-nowrap z-10 ${className}`}
    >
      {badgeText}
    </span>
  );
};

export default Badge;