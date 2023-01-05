import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "ebefa668-a1db-4fb8-b361-31e25c28e2b2" },
});

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then((response) => {
            return response.data;
          });
      }
}

