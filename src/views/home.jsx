import { useEffect, useState } from "react";
import { getPlayerList } from "../api/server";
import PlayerList from "../components/PlayerList";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [playerList, setPlayerList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getPlayerList()
      .then((response) => {
        setFetching(false);
        if (response) {
          setPlayerList(response);
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

  if (fetching) {
    return (
      <div className="w-full h-80 justify-center items-center flex flex-col">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section>
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Football Players Information!
        </h1>
        {errorMsg && (
          <p className="text-sm text-red-500 text-center">{errorMsg}</p>
        )}
        {playerList && playerList.length > 0 ? (
          <PlayerList playerList={playerList} />
        ) : (
          <p className="text-center text-gray-600"> No data found.</p>
        )}
      </div>
    </section>
  );
}
