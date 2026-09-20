import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="flex w-full max-w-[600px]">
      {/* div relative wrapper because clear button */}
      <div className="relative w-full">
        <input
          className="w-full border rounded-l-full py-2 pl-4 pr-12 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
      </div>
      <button
        className="bg-gray-100 px-5 py-2.5 rounded-r-full border border-l-0 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        <Search className="size-5" />
      </button>
    </form>
  );
}
