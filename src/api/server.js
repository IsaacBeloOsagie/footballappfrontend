const BASE_URL = "https://mi-linux.wlv.ac.uk/~2309357/football-players/public/api/players";
const fetchOptions = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json"
  },
};

export async function getPlayerList() {
  const getData = await fetch(BASE_URL , {
    ...fetchOptions,
  });
  const reponse = await getData.json();
  return reponse;
}

export async function getPlayerDetails(id) {
  const getData = await fetch(BASE_URL + `/${id}`, {
    ...fetchOptions,
  });
  const reponse = await getData.json();
  return reponse;
}


export async function createPlayer(values) {
  let postData = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      ...values,
    }),
  };
  const getData = await fetch(BASE_URL, {
    ...postData,
  });

  const  response = await getData.json();
  return response;
}

export async function updatePlayer(id, values) {
  let postData = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      ...values,
    }),
  };
  const getData = await fetch(BASE_URL + `/${id}?_method=put`, {
    ...postData,
  });

  const response  = await getData.json();
  return response;
}

export async function removePlayer(id) {
  let postData = {
    method: "POST",
  }
  const getData = await fetch(BASE_URL + `/${id}?_method=delete`, {
    ...fetchOptions, ...postData
  });
}
