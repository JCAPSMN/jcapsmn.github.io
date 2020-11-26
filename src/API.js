import { Client } from "@petfinder/petfinder-js";
const client = new Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET
});
export default client;