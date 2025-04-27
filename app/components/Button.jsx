import React from "react";
import Link from "next/link"; 

const Button = ({ label, ariaLabel, route }) => (
  <Link
    href={route}
    className="md:mt-0 bg-red-700 hover:bg-transparent hover:border hover:border-white text-white px-6 py-1.5 rounded-full font-semibold transition-colors text-sm whitespace-nowrap"
    aria-label={ariaLabel}
  >
    {label}
  </Link>
);

export default Button;
