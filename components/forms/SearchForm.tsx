import { HiSearch } from "react-icons/hi";

const SearchForm = ({
  searchQuery,
  onChange,
  onSubmit,
  placeholder = "Search jobs, companies, or skills...",
}: {
  searchQuery: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
}) => (
  <form onSubmit={onSubmit} className="flex-1 max-w-lg mx-12">
    <div className="relative">
      <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-20 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
