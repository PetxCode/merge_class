const url: string = `http://localhost:2211/api`;

export const getWebData = async () => {
  return await fetch(`${url}/get-web`, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
};

export const likeWebData = async (ID: string) => {
  return await fetch(`${url}/update-web-like/${ID}`, { method: "PATCH" })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
};
