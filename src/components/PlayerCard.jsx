import { Link } from "react-router-dom";

export default function PlayerCard({ id, name, position, country, club }) {
  return (
    <li className="py-3 sm:py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:px-4 rounded-lg transition-all ease-in-out cursor-pointer">
      <Link to={`/details/${id}`}>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {position}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Co: {country}
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Cl: {club}
          </div>
        </div>
      </Link>
    </li>
  );
}
