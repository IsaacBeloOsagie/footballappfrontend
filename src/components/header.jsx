import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="pb-6 bg-white lg:shadow lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <p className="text-5xl">Isaac Football App </p>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              to="/"
              title="Homepage"
              className="text-base font-medium text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
            >
              {" "}
              All Players
            </Link>
          </div>

          <Link
            to="/create"
            title="Create Player"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md lg:inline-flex hover:bg-green-700 focus:bg-green-700"
            role="button"
          >
            + Add Player
          </Link>
        </nav>
      </div>
    </header>
  );
}
