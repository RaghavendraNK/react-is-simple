import axios from "axios";
export const getPosts = () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  return axios
    .get(url)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getTitles = (path: string) => {
  const url = `https://jsonplaceholder.typicode.com/${path}`;
  return axios
    .get(url)
    .then(({ data }) => {
      return data.map((i: any) => i.title);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
