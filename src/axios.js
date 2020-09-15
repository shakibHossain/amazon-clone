import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  // baseURL: "http://localhost:5001/clone-f13fd/us-central1/api",
  baseURL: "https://us-central1-clone-f13fd.cloudfunctions.net/api",
});

export default instance;
