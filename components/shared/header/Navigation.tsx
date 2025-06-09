import Link from "next/link";

const Navigation = ({
  links,
  onLinkClick,
  isMobile = false,
}: {
  links: Array<{ href: string; label: string }>;
  onLinkClick?: () => void;
  isMobile?: boolean;
}) => (
  <nav className={isMobile ? "space-y-2" : "flex items-center space-x-2"}>
    {links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        onClick={onLinkClick}
        className={`${
          isMobile ? "block px-4 py-3" : "px-4 py-2"
        } text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium`}
      >
        {label}
      </Link>
    ))}
    {!isMobile && <div className="w-px h-6 bg-gray-300 mx-2" />}
    <div className={isMobile ? "pt-2" : ""}>
      <Link
        href="/auth/login"
        onClick={onLinkClick}
        className={`${
          isMobile
            ? "block w-full text-center"
            : "inline-flex transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
        } px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200`}
      >
        Login
      </Link>
    </div>
  </nav>
);

export default Navigation;
