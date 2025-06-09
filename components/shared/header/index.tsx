"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import SearchForm from "@/components/forms/SearchForm";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/jobs", label: "Jobs" },
    { href: "/liked", label: "Liked" },
    { href: "/create-profile", label: "Profile" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="hidden lg:flex items-center justify-between">
          <Logo />

          <SearchForm
            searchQuery={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
          />

          <Navigation links={navLinks} />
        </div>

        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-gray-200/20">
              <div className="mt-4 mb-6">
                <SearchForm
                  searchQuery={searchQuery}
                  onChange={setSearchQuery}
                  onSubmit={handleSearch}
                  placeholder="Search jobs..."
                />
              </div>

              <Navigation
                links={navLinks}
                onLinkClick={closeMobileMenu}
                isMobile
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
