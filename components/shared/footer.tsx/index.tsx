"use client";

import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {APP_NAME}
            </Link>
            <nav className="flex space-x-6">
              <Link
                href="/jobs"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Jobs
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
