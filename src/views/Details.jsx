import { useEffect, useState } from "react";
import { getPlayerDetails, removePlayer } from "../api/server";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export default function PlayerDetails() {
  const [fetching, setFetching] = useState(true);
  const [playerDetails, setPlayerDetails] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getPlayerDetails(id)
      .then((response) => {
        if (response) {
          setPlayerDetails(response);
          setFetching(false);
        } else {
          throw new Error(response.message);
        }
      })
      .catch((error) => {
        setErrorMsg(
          error?.message
            ? error.message
            : "Server returned an error. Please try again!"
        );
        setFetching(false);
      });
  }, []);

  const deleteItem = () => {
    if (confirm(`Are you sure you want to delete ${playerDetails.name}?`)) {
      removePlayer(id).then(() => {
        navigate(`/`);
      });
    }
  };

  if (fetching) {
    return (
      <div className="w-full h-80 justify-center items-center flex flex-col">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      {errorMsg && (
        <p className="text-sm text-red-500 text-center">{errorMsg}</p>
      )}
      {playerDetails && (
        <div className="max-w-2xl mx-auto">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Player Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Details about the selected football player.
            </p>
          </div>
          <div className="flex space-x-2 items-center justify-end">
            <Link
              to={`/edit/${id}`}
              title="Edit"
              className="items-center justify-center hidden px-4 py-1.5 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md lg:inline-flex hover:bg-green-700 focus:bg-green-700"
              role="button"
            >
              Edit
            </Link>
            <button
              title="Delete"
              className="items-center justify-center hidden px-4 py-1.5 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md lg:inline-flex hover:bg-red-700 focus:bg-red-700"
              role="button"
              onClick={deleteItem}
            >
              Delete
            </button>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Player Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {playerDetails.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Position
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {playerDetails.position}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Country
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {playerDetails.country}
                </dd>
              </div>
              <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Club
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {playerDetails.club}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
