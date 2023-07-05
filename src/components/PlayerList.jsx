import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";

export default function PlayerList ({ playerList }) {
  return (
    <div className="w-full mx-auto">
      <div className="p-4 max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end items-center mb-4">
          <Link
            to="/create"
            className="text-sm font-medium text-green-600 hover:underline dark:text-green-500"
          >
            + Add Player
          </Link>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {playerList.map((item) => {
              return <PlayerCard key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

