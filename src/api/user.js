import axios from "axios";

export function getUsers() {
  return axios.get("https://reqres.in/api/users", {
    params: {
      page: 1,
      per_page: 3,
    },
  });
}
